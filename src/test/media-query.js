import { vi } from 'vitest';

export function mockMediaQueries(initialWidth = 1200, initialReduced = true) {
  let width = initialWidth;
  let reduced = initialReduced;
  const queries = new Map();
  const matches = (query) => {
    if (query.includes('prefers-reduced-motion')) return query.includes('no-preference') ? !reduced : reduced;
    const minimum = query.match(/min-width:\s*(\d+)px/);
    return minimum ? width >= Number(minimum[1]) : false;
  };
  vi.stubGlobal('matchMedia', vi.fn((query) => {
    if (!queries.has(query)) {
      const listeners = new Set();
      queries.set(query, {
        media: query,
        matches: matches(query),
        addEventListener: (_event, callback) => listeners.add(callback),
        removeEventListener: (_event, callback) => listeners.delete(callback),
        addListener: (callback) => listeners.add(callback),
        removeListener: (callback) => listeners.delete(callback),
        listeners,
      });
    }
    return queries.get(query);
  }));
  return (nextWidth, nextReduced = reduced) => {
    width = nextWidth;
    reduced = nextReduced;
    queries.forEach((media, query) => {
      const next = matches(query);
      if (media.matches !== next) {
        media.matches = next;
        media.listeners.forEach((callback) => callback(media));
      }
    });
  };
}
