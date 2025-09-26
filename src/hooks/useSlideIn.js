import { useState, useEffect, useRef } from 'react';

export function useSlideIn({ threshold = 0.1, rootMargin = '0px' } = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, entry.target.dataset.delay || 0);
        } else {
          setIsVisible(false); 
        }
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold, rootMargin]);

  return [ref, isVisible];
}