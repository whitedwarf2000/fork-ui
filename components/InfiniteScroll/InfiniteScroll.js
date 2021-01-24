import { useState, useRef, useEffect } from 'react';

const useIntersectionObserver = (rootMargin, threshold ) => {
  const [entry, setEntry] = useState({});

  const scrollRef = useRef();
  const contentRef = useRef();

  const observer = useRef(null);

  useEffect(() => {
    observer.current = new window.IntersectionObserver(([_entry]) => setEntry(_entry), {
      root: scrollRef.current,
      rootMargin: rootMargin,
      threshold: threshold,
    })

    observer.current.observe(contentRef.current);

    return () => observer.current.disconnect();
  }, [rootMargin, threshold]);

  return [scrollRef, contentRef, entry];
};

const InfiniteScroll = ({ children }) => {
  const [scrollRef, contentRef] = useIntersectionObserver(rootMargin);

  return (
    <div data-scroll-id="root" ref={scrollRef}>
      <div data-scroll-id="start" />
      <div data-scroll-id="content" ref={contentRef}>
        {children}
      </div>
      <div data-scroll-id="end" />
    </div>
  );
};

export default InfiniteScroll;
