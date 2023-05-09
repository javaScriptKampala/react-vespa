import React, { useEffect, useRef, useState } from 'react';
import './magic.css';

function Animate({
  entranceAnimation,
  exitAnimation,
  duration,
  delay,
  children,
  onOut,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [animationName, setAnimationName] = useState(entranceAnimation);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && entry.intersectionRatio === 0) {
          if (onOut) {
            setAnimationName(exitAnimation);
            onOut();
          }
        } else {
          setVisible(entry.isIntersecting);
        }
      },
      { threshold: 0 }
    );
    observer.observe(ref.current);

    return () => {
      observer.unobserve(ref.current);
    };
  }, [entranceAnimation, exitAnimation, onOut]);

  const styles = {
    animationName,
    animationDuration: `${duration}ms`,
    animationDelay: `${delay}ms`,
    visibility: visible ? 'visible' : 'hidden',
  };

  const handleAnimationEnd = () => {
    if (animationName === exitAnimation) {
      setAnimationName(entranceAnimation);
    }
  };

  return (
    <div
      ref={ref}
      className={`magictime ${animationName}`}
      style={styles}
      onAnimationEnd={handleAnimationEnd}
      {...rest}>
      {children}
    </div>
  );
}

export default Animate;
