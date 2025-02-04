import React, { useEffect } from 'react';
type IntersectionCallback = (target: Element, isVisible: boolean) => void;

const useIntersectionObserver = (
  refs: React.RefObject<HTMLDivElement>[],
  callback?: IntersectionCallback,
  options?: globalThis.IntersectionObserverInit
)  => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // console.log(`Observing element: ${entry.target}, isIntersecting: ${entry.isIntersecting}`);
        if(callback) callback(entry.target, entry.isIntersecting);
      });
    }, options);

    refs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [refs, options]);
};

export default useIntersectionObserver;
