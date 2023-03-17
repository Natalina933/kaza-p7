import React from "react";
import { BrowserRouter } from "react-router-dom";
import PublicRouter from "./pages/PublicRouter";
import { useState, useEffect } from "react";

function App() {
  const [apparts, setApparts] = useState(null);
  const [isloading, setIsLoading] = useState(true);
  const [probleme, setProbleme] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rep = await fetch('./datas/appartement.json');
        const jsondata = await rep.json();
        setApparts(jsondata);
        setIsLoading(false);
      } catch (error) {
        setProbleme(error);
        setIsLoading(false);
      }
    };
    setTimeout(fetchData, 0);
    return () => {};
  }, []);
  if (probleme) {
    return <p>probleme : {probleme.message}</p>

  }

  return !isloading ? (
    <BrowserRouter>
      <PublicRouter apparts={apparts} />
    </BrowserRouter>
  ) : (
    <BrowserRouter>
      <p>chargement des données</p>
    </BrowserRouter>
  );
}

export default App;
