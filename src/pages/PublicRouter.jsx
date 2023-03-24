import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About/About";
import Home from "./Home/Home";
import Layout from "./Layout/Layout";
import Lodging from "./Lodging/Lodging";
import NotFound from "./NotFound/NotFound";

function PublicRouter() {
  const [apparts, setApparts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch("../datas/appartement.json");
        const dataJson = await data.json();
        setApparts(dataJson);
      } catch (error) {
        console.log(error);
      }
    };
    setTimeout(fetchData, 0);
    return () => {};
  }, []);
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home apparts={apparts} />} />
          <Route path="/about" element={<About />} />
          <Route path="/lodging/:lodgingId" element={<Lodging apparts={apparts}/>} />
          <Route path="/error" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default PublicRouter;
