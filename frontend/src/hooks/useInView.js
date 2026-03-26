import { useEffect, useRef, useState } from 'react';

export const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        // Une fois visible, on peut arrêter d'observer
        if (options.once) {
          observer.disconnect();
        }
      } else if (!options.once) {
        setIsInView(false);
      }
    }, {
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
