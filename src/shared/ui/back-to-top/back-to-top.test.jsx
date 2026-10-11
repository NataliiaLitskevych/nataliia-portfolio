import { act, cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { BackToTop } from './back-to-top';

afterEach(() => { cleanup(); vi.unstubAllGlobals(); });

it('shows after Hero, avoids occupied content, and returns focus to Home', async () => {
  const observers = [];
  vi.stubGlobal('IntersectionObserver', class {
    constructor(callback, options) { this.callback = callback; this.options = options; observers.push(this); }
    observe() {}
    disconnect() {}
  });
  render(<div id="root"><header><a href="#top">Home</a></header><section><h1>Hero</h1></section><BackToTop /></div>);
  expect(screen.queryByRole('link', { name: 'Back to top' })).not.toBeInTheDocument();
  act(() => observers[0].callback([{ isIntersecting: false, boundingClientRect: { bottom: -10 } }]));
  const back = screen.getByRole('link', { name: 'Back to top' });
  expect(back).toHaveAttribute('href', '#top');
  const obstacle = document.querySelector('h1');
  act(() => observers[1].callback([{ target: obstacle, isIntersecting: true }]));
  expect(screen.queryByRole('link', { name: 'Back to top' })).not.toBeInTheDocument();
  act(() => observers[1].callback([{ target: obstacle, isIntersecting: false }]));
  await userEvent.click(screen.getByRole('link', { name: 'Back to top' }));
  await waitFor(() => expect(screen.getByRole('link', { name: 'Home' })).toHaveFocus());
});
