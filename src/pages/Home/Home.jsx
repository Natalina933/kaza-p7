import Banner from "../../components/Banner/Banner";
import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import data from "../../datas/appartement.json"

function Home() {
  const index = 1;
  const [title, setTitle] = useState("");
  const [apparts, setApparts] = useState([])
  

  useEffect(() => {
    setTitle("Chez vous, partout et ailleurs");
  }, []);

  useEffect(()=>{
    setApparts(data)
  },[])
  return (
    <div className="wrapper home">
      <Banner imageSrc={`./bgHome${index}.jpg`} title={title} />
      {
        apparts.map((appart)=>(
          <Card appartPicture={appart.cover} appartTitle={appart.title} />

        ))
      }
    </div>
  );
}

export default Home;
