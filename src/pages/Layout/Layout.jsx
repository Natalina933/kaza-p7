import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";

//relie mes pages
function Layout() {
  return (
    <>
      <div className="site-wrapper">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
