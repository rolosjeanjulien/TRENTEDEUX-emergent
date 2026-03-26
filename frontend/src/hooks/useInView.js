import { useEffect, useRef, useState } from 'react';

export const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Le scroll se fait dans .App, pas dans la fenêtre.
    // L'IntersectionObserver doit utiliser .App comme root
    // pour détecter correctement les éléments qui entrent en vue.
    const scrollContainer = document.querySelector('.App') || null;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (options.once) {
          observer.disconnect();
        }
      } else if (!options.once) {
        setIsInView(false);
      }
    }, {
      root: scrollContainer,
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '0px'
    });

    const el = ref.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) {
        observer.unobserve(el);
      }
    };
  }, [options.threshold, options.rootMargin, options.once]);

  return [ref, isInView];
};
