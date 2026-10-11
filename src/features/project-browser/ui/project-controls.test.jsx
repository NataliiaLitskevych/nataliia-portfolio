import { Provider } from 'react-redux';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { configureStore } from '@reduxjs/toolkit';
import { projectsUiReducer } from '@/features/project-browser/model/projects-ui-slice';
import { ProjectControls } from './project-controls';

function renderWithStore(ui) {
  const store = configureStore({
    reducer: {
      projectsUi: projectsUiReducer,
    },
  });

  return {
    user: userEvent.setup(),
    store,
    ...render(<Provider store={store}>{ui}</Provider>),
  };
}

describe('ProjectControls', () => {
  it('exposes only four filters in a named group and supports keyboard activation', async () => {
    const { user } = renderWithStore(<ProjectControls />);
    const group = screen.getByRole('group', { name: 'Project filters' });
    expect(within(group).getAllByRole('button').map((button) => button.textContent)).toEqual([
      'All projects', 'Top frontend work', 'Team project', 'Solo projects',
    ]);
    expect(screen.getAllByRole('button')).toHaveLength(4);

    await user.tab();
    expect(screen.getByRole('button', { name: 'All projects' })).toHaveFocus();
    await user.tab();
    await user.keyboard('{Enter}');
    expect(screen.getByRole('button', { name: 'Top frontend work' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: 'All projects' })).toHaveAttribute('aria-pressed', 'false');
  });

  it('changes the active filter chip', async () => {
    const { user } = renderWithStore(<ProjectControls />);

    const soloButton = screen.getByRole('button', { name: /solo projects/i });

    await user.click(soloButton);

    expect(soloButton).toHaveAttribute('aria-pressed', 'true');
  });
});
