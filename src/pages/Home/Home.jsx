import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import ImageB from "../../assets/bgHome1.jpg";
import { API_getAllLodgings } from "../../API";
import { useLoaderData } from "react-router-dom";

export async function getAllLodgings() {
  return await API_getAllLodgings()
}
function Home() {
  const{apparts}= useLoaderData()
  return (
    <div className="home">
      <Banner imageSrc={ImageB} title="Chez vous, partout et ailleurs" />
      <div className="cards">
        {apparts.map((appart) => (
          <Card
            key={appart.id}
            appartTitle={appart.title}
            appartPicture={appart.cover}
            lodgingId={appart.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
