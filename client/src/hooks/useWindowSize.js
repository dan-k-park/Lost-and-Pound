import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowWidth, setWindowWidth] = useState({ width: undefined });
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth({
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowWidth;
};

export default useWindowSize;
