import Banner from "../../components/Banner/Banner";
import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";

function Home({ apparts }) {
  const index = 1;
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle("Chez vous, partout et ailleurs");
  }, []);

  return (
    <div className="home">
      <Banner imageSrc={`./bgHome${index}.jpg`} title={title} key={index} />
      {apparts.map((appart) => (
        <Card
          key={appart.id}
          appartTitle={appart.title}
          appartPicture={appart.cover}
        />
      ))}
    </div>
  );
}

export default Home;
