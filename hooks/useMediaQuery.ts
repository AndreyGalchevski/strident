import { useCallback, useEffect, useState } from "react";

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  const updateTarget = useCallback((e: any) => {
    if (e.matches) {
      setMatches(true);
    } else {
      setMatches(false);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaMatch = window.matchMedia(query);
      mediaMatch.addListener(updateTarget);

      return (): void => mediaMatch.removeListener(updateTarget);
    }
  }, [query, updateTarget]);

  return matches;
};

export default useMediaQuery;
