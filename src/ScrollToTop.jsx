import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // This forces the browser to jump to the top (0, 0) instantly
    // whenever the URL path changes (e.g. going from / to /donate)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}