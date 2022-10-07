import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import NavbarLarge from "./NavbarLarge";

const Layout = ({ children }) => {
  const [viewWidth, setViewWidth] = useState(0);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const portWidth = window.innerWidth;
      setViewWidth(portWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <div>
      {viewWidth < 420 ? <Navbar /> : <NavbarLarge />}

      {children}
    </div>
  );
};

export default Layout;
