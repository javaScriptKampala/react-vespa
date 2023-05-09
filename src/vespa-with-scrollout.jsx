import React, { useEffect, useRef } from 'react';
import './magic.css';
import scrollOut from 'scroll-out';

function Animate({
  animationIn,
  animationOut,
  duration,
  delay,
  when,
  children,
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    scrollOut({
      targets: ref.current,
      onShown: (el) => {
        el.classList.add(animationIn);
        el.classList.remove(animationOut);
      },
      onHidden: (el) => {
        el.classList.add(animationOut);
        el.classList.remove(animationIn);
      },
      offset: 0.5,
    });
  }, [animationIn, animationOut]);

  return (
    <div ref={ref} className="animate" {...rest}>
      {children}
    </div>
  );
}

export default Animate;
