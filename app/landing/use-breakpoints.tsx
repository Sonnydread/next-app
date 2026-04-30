import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;
const LARGE_BREAKPOINT = 1024;

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    // Valor inicial síncrono (evita undefined)
    if (typeof window === "undefined") return false;
    return window.innerWidth < MOBILE_BREAKPOINT;
  });

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    const onChange = () => setIsMobile(mql.matches);

    mql.addEventListener("change", onChange);
    // También escuchar resize por si matchMedia fails en algún navegador raro
    window.addEventListener("resize", onChange);

    return () => {
      mql.removeEventListener("change", onChange);
      window.removeEventListener("resize", onChange);
    };
  }, []);

  return isMobile;
}

export function useIsLargeScreen() {
  const [isLarge, setIsLarge] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth >= LARGE_BREAKPOINT;
  });

  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${LARGE_BREAKPOINT}px)`);

    const onChange = () => setIsLarge(mql.matches);

    mql.addEventListener("change", onChange);
    window.addEventListener("resize", onChange);

    return () => {
      mql.removeEventListener("change", onChange);
      window.removeEventListener("resize", onChange);
    };
  }, []);

  return isLarge;
}