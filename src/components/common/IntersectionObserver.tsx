import { useEffect, useRef, ReactNode } from "react";

type IntersectionObserverProps = {
  children: ReactNode;
  onIntersect: (isVisible: boolean) => void;
  options?: IntersectionObserverInit;
};

const IntersectionObserver = ({ children, onIntersect, options }: IntersectionObserverProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new window.IntersectionObserver(([entry]) => {
      onIntersect(entry.isIntersecting);
    }, options);

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [onIntersect, options]);

  return <div ref={ref}>{children}</div>;
};

export default IntersectionObserver;
