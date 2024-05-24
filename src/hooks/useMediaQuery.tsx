import { useState, useEffect, useCallback } from "react";

const useMediaQuery = (width: number): boolean => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e: MediaQueryListEvent) => {
    setTargetReached(e.matches);
  }, []); 

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    
    // Set initial state based on current media query match
    setTargetReached(media.matches);
    
    media.addEventListener("change", updateTarget); // Add event listener with correct type

    return () => media.removeEventListener("change", updateTarget); // Cleanup listener
  }, [width, updateTarget]); // Add dependencies

  return targetReached;
};

export default useMediaQuery;
