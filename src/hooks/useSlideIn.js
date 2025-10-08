import { useState, useEffect, useRef } from 'react';

export function useSlideIn({ threshold = 0.1, rootMargin = '100px', disableOnMobile = true } = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // Проверяем, нужно ли отключать анимацию на мобильных
    const isMobile = disableOnMobile && window.innerWidth <= 1350;

    if (isMobile) {
      // Сразу делаем видимым — без анимации
      setIsVisible(true);
      return;
    }

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
  }, [threshold, rootMargin, disableOnMobile]);

  return [ref, isVisible];
}