import { useMemo, useSyncExternalStore } from 'react';

export function useMediaQuery(query) {
  const source = useMemo(() => {
    const media = window.matchMedia(query);
    return {
      subscribe(notify) {
        media.addEventListener('change', notify);
        return () => media.removeEventListener('change', notify);
      },
      getSnapshot: () => media.matches,
    };
  }, [query]);
  return useSyncExternalStore(source.subscribe, source.getSnapshot, () => false);
}
