import { mockMediaQueries } from '@/test/media-query';
import { act, cleanup, render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import gsap from 'gsap';
import { projectsUiReducer } from '@/features/project-browser/model/projects-ui-slice';
import { ProjectsSection } from './projects-section';

function renderProjects(reducedMotion = true, width = 1200) {
  const resize = mockMediaQueries(width, reducedMotion);
  const store = configureStore({ reducer: { projectsUi: projectsUiReducer } });
  render(<Provider store={store}><ProjectsSection /></Provider>);
  return { user: userEvent.setup(), store, resize };
}

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe('ProjectsSection', () => {
  it('preserves all six projects and the existing filter membership and order', async () => {
    const { user } = renderProjects();
    const all = ['Interior Design Web App', 'Aura Design', 'Recipe Search', 'To Do List', 'Weather Forecast App', 'Nutrition Analyzer'];
    for (const [filter, titles] of [
      ['All projects', all],
      ['Top frontend work', all.slice(0, 3)],
      ['Team project', all.slice(0, 1)],
      ['Solo projects', all.slice(1)],
    ]) {
      await user.click(screen.getByRole('button', { name: filter, exact: true }));
      const cards = screen.getAllByRole('button').filter((button) => button.querySelector('h3'));
      expect(cards.map((card) => card.querySelector('h3').textContent)).toEqual(titles);
    }
  });

  it('keeps an available selection and selects the first result when excluded', async () => {
    const { user, store } = renderProjects();
    await user.click(screen.getByRole('button', { name: 'Aura Design', exact: true }));
    await user.click(screen.getByRole('button', { name: 'Solo projects', exact: true }));
    expect(store.getState().projectsUi.selectedProjectId).toBe('aura-design');
    expect(screen.getByRole('region', { name: 'Aura Design' })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Team project', exact: true }));
    expect(store.getState().projectsUi.selectedProjectId).toBe('interior-design-web-app');
    expect(screen.getByRole('region', { name: 'Interior Design Web App' })).toBeInTheDocument();
  });

  it.each([true, false])('respects reduced motion on mount and selection (reduced: %s)', async (reducedMotion) => {
    const animate = vi.spyOn(gsap, 'fromTo');
    const { user } = renderProjects(reducedMotion);
    expect(animate).toHaveBeenCalledTimes(reducedMotion ? 0 : 1);
    await user.click(screen.getByRole('button', { name: 'Solo projects', exact: true }));
    expect(animate).toHaveBeenCalledTimes(reducedMotion ? 0 : 2);
    if (!reducedMotion) {
      expect(animate).toHaveBeenLastCalledWith(
        expect.any(HTMLElement),
        { opacity: 0, y: 12 },
        expect.objectContaining({ opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' })
      );
    }
  });
});


describe('responsive project placement', () => {
  it('responds when the reduced-motion preference changes', async () => {
    const animate = vi.spyOn(gsap, 'fromTo');
    const { resize } = renderProjects(true, 390);
    expect(animate).not.toHaveBeenCalled();
    await act(async () => resize(390, false));
    await waitFor(() => expect(animate).toHaveBeenCalledTimes(1));
    // GSAP batches media-query changes; allow a separate event turn.
    await new Promise((resolve) => setTimeout(resolve, 10));
    await act(async () => resize(390, true));
    await waitFor(() => expect(screen.getByRole('region').parentElement.style.transform).toBe(''));
    expect(animate).toHaveBeenCalledTimes(1);
  });
  it.each([320, 390, 767, 768, 959, 960, 1159, 1160, 1200, 1440])('places one detail in reading order at %spx', async (width) => {
    const { user } = renderProjects(true, width);
    const cards = () => screen.getAllByRole('button').filter((button) => button.id.startsWith('project-button-'));
    const initial = cards()[0];
    const region = screen.getByRole('region');
    expect(cards()).toHaveLength(6);
    for (const card of cards()) {
      expect(card).toHaveAccessibleName(card.querySelector('h3').textContent);
    }
    expect(initial).toHaveAttribute('aria-controls', region.id);
    if (width >= 1160) {
      expect(initial).toHaveAttribute('aria-pressed', 'true');
      expect(region.closest('article').previousElementSibling).toContainElement(initial);
    } else {
      expect(initial).toHaveAttribute('aria-expanded', 'true');
      expect(region.closest('article').previousElementSibling).toContainElement(cards()[width >= 768 ? 1 : 0]);
    }
    cards()[2].focus();
    await user.keyboard('{Enter}');
    await user.click(cards()[2]);
    expect(screen.getAllByRole('region')).toHaveLength(1);
    expect(screen.getByRole('region')).toHaveAccessibleName('Recipe Search');
    expect(cards()[2]).toHaveFocus();
    if (width < 1160) {
      expect(screen.getByRole('region').closest('article').previousElementSibling).toContainElement(cards()[width >= 768 ? 3 : 2]);
      expect(cards().filter((button) => button.getAttribute('aria-expanded') === 'true')).toHaveLength(1);
    }
  });

  it('preserves selection and focused detail link across desktop/tablet/mobile', async () => {
    const { user, resize, store } = renderProjects(true, 1200);
    await user.click(screen.getByRole('button', { name: 'Aura Design', exact: true }));
    screen.getByRole('link', { name: 'GitHub' }).focus();
    await act(async () => resize(768));
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveFocus();
    await act(async () => resize(390));
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveFocus();
    await act(async () => resize(1200));
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveFocus();
    expect(screen.getAllByRole('region')).toHaveLength(1);
    expect(store.getState().projectsUi.selectedProjectId).toBe('aura-design');
  });

  it('places an odd filtered final row correctly and preserves fallback selection', async () => {
    const { user } = renderProjects(true, 768);
    await user.click(screen.getByRole('button', { name: 'Top frontend work', exact: true }));
    const recipe = screen.getByRole('button', { name: 'Recipe Search', exact: true });
    await user.click(recipe);
    expect(screen.getByRole('region').closest('article').previousElementSibling).toContainElement(recipe);
    await user.click(screen.getByRole('button', { name: 'Team project', exact: true }));
    expect(screen.getByRole('region')).toHaveAccessibleName('Interior Design Web App');
    expect(screen.getAllByRole('region')).toHaveLength(1);
  });
});
