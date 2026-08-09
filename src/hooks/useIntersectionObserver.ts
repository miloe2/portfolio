import { useEffect, useRef, type RefObject } from "react";
type IntersectionCallback = (target: Element, isVisible: boolean) => void;

const useIntersectionObserver = (
  refs: RefObject<HTMLDivElement>[],
  callback?: IntersectionCallback,
  options?: globalThis.IntersectionObserverInit,
) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        callbackRef.current?.(entry.target, entry.isIntersecting);
      });
    }, options);

    const elements = refs
      .map((ref) => ref.current)
      .filter((element): element is HTMLDivElement => element !== null);

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [options, refs]);
};

export default useIntersectionObserver;
