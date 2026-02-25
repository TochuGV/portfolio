import { useEffect } from "react";

const updateScrollbar = () => {
  const { scrollY, innerHeight } = window;
  const { scrollHeight } = document.documentElement;
  const scrollBottom = scrollHeight - scrollY - innerHeight;
  const root = document.documentElement;

  root.style.setProperty('--scrollbar-top-radius', scrollY < 10 ? '0px' : '5px');
  root.style.setProperty('--scrollbar-bottom-radius', scrollBottom < 10 ? '0px' : '5px');
};

const useScrollbar = () => {
  useEffect(() => {
    window.addEventListener('scroll', updateScrollbar);
    updateScrollbar();
    return () => window.removeEventListener('scroll', updateScrollbar);
  }, [])
}

export default useScrollbar