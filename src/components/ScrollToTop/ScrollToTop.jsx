import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const prevPathname = useRef(pathname);

  // Save scroll position when leaving Work page
  useEffect(() => {
    if (pathname === "/work") {
      const saveScroll = () => {
        sessionStorage.setItem("workScrollPos", window.scrollY.toString());
      };

      window.addEventListener("scroll", saveScroll);
      return () => window.removeEventListener("scroll", saveScroll);
    }
  }, [pathname]);

  // Handle scroll on route change - runs before browser paint
  useLayoutEffect(() => {
    const isReturningToWork =
      prevPathname.current.startsWith("/work/") && pathname === "/work";

    if (isReturningToWork) {
      // Restore saved scroll position
      const savedScroll = sessionStorage.getItem("workScrollPos");
      if (savedScroll) {
        window.scrollTo(0, parseInt(savedScroll, 10));
      }
    } else {
      // Scroll to top for all other navigation
      window.scrollTo(0, 0);
    }

    prevPathname.current = pathname;
  }, [pathname]);

  return null;
};

export default ScrollToTop;
