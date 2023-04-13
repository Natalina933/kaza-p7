import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
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

export default App;
