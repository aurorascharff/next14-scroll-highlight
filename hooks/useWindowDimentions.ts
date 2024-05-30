import { useEffect, useState } from 'react';

function getWindowDimensions() {
  if (typeof window === 'undefined') {
    return {
      height: 0,
      width: 0,
    };
  }
  const { innerWidth: width, innerHeight: height } = window;
  return {
    height,
    width,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => {
      return window.removeEventListener('resize', handleResize);
    };
  }, []);
  return { height: windowDimensions.height, width: windowDimensions.width };
}
