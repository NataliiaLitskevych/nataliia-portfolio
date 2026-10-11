import { act, cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { mockMediaQueries } from '@/test/media-query';
import { SiteHeader } from './site-header';

let observers;
beforeEach(() => {
  observers = [];
  vi.stubGlobal('IntersectionObserver', class {
    constructor(callback, options) { this.callback = callback; this.options = options; observers.push(this); }
    observe() {}
    disconnect() {}
  });
  vi.stubGlobal('ResizeObserver', class { observe() {} disconnect() {} });
});
afterEach(() => { cleanup(); vi.restoreAllMocks(); vi.unstubAllGlobals(); });

function setup(width = 390) {
  const resize = mockMediaQueries(width);
  render(<><SiteHeader /><main>
    <section><h1>Hero</h1></section>
    {['about', 'skills', 'projects', 'contact'].map((id) => <section id={id} key={id}><h2>{id}</h2></section>)}
    <button>Outside header</button>
  </main><footer>Footer</footer></>);
  return { user: userEvent.setup(), resize };
}

describe('responsive section navigation', () => {
  it('opens by keyboard, exposes native links, and closes on Escape with focus restored', async () => {
    const { user } = setup();
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
    await user.tab();
    await user.tab();
    const toggle = screen.getByRole('button', { name: 'Open navigation' });
    expect(toggle).toHaveFocus();
    await user.keyboard('{Enter}');
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    expect(document.getElementById(toggle.getAttribute('aria-controls'))).toHaveAttribute('aria-label', 'Section navigation');
    await user.tab();
    expect(screen.getByRole('link', { name: 'About', exact: true })).toHaveFocus();
    await user.keyboard('{Escape}');
    expect(toggle).toHaveFocus();
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });

  it('closes after section navigation and focuses the destination heading', async () => {
    const { user } = setup();
    await user.click(screen.getByRole('button', { name: 'Open navigation' }));
    await user.click(screen.getByRole('link', { name: 'Projects', exact: true }));
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
    await waitFor(() => expect(screen.getByRole('heading', { name: 'projects' })).toHaveFocus());
  });

  it('closes for outside pointers, focus leaving the header, and Home', async () => {
    const { user } = setup();
    await user.click(screen.getByRole('button', { name: 'Open navigation' }));
    fireEvent.pointerDown(screen.getByRole('button', { name: 'Outside header' }));
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Open navigation' }));
    await user.tab({ shift: true });
    expect(screen.getByRole('link', { name: 'Nataliia Litskevych' })).toHaveFocus();
    act(() => screen.getByRole('button', { name: 'Outside header' }).focus());
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Open navigation' }));
    await user.click(screen.getByRole('link', { name: 'Nataliia Litskevych' }));
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });

  it('keeps desktop links available and resets open state across breakpoints', async () => {
    const { user, resize } = setup(959);
    await user.click(screen.getByRole('button', { name: 'Open navigation' }));
    act(() => resize(960));
    expect(screen.queryByRole('button', { name: /navigation/ })).not.toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeVisible();
    await waitFor(() => expect(screen.getByRole('link', { name: 'Nataliia Litskevych' })).toHaveFocus());
    act(() => screen.getByRole('link', { name: 'About', exact: true }).focus());
    act(() => resize(959));
    expect(screen.getByRole('button', { name: 'Open navigation' })).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
    await waitFor(() => expect(screen.getByRole('button', { name: 'Open navigation' })).toHaveFocus());
  });

  it('marks the section at the observer activation line, including a tall Projects section', () => {
    setup(1200);
    const positions = { about: -900, skills: -500, projects: -100, contact: 2000 };
    for (const [id, top] of Object.entries(positions)) {
      vi.spyOn(document.getElementById(id), 'getBoundingClientRect').mockReturnValue({ top, bottom: top + 2100 });
    }
    const observer = observers.find((item) => item.options?.rootMargin);
    act(() => observer.callback([]));
    expect(screen.getByRole('link', { name: 'Projects', exact: true })).toHaveAttribute('aria-current', 'location');
    expect(screen.getByRole('link', { name: 'Skills', exact: true })).not.toHaveAttribute('aria-current');
    const footerObserver = observers.find((item) => !item.options);
    act(() => footerObserver.callback([{ isIntersecting: true }]));
    expect(screen.getByRole('link', { name: 'Contact', exact: true })).toHaveAttribute('aria-current', 'location');
  });
});
