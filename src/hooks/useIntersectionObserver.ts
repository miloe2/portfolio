import { useState, useEffect, useRef } from 'react';

// 반환 타입을 정의해줍니다. [ref: RefObject<HTMLDivElement>, isVisible: boolean]
type UseIntersectionObserverReturnType = [React.RefObject<HTMLDivElement>, boolean];

const useIntersectionObserver = (options?: IntersectionObserverInit): UseIntersectionObserverReturnType => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isVisible];
};

export default useIntersectionObserver;
