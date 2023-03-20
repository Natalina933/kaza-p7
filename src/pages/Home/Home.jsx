import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import ImageB from "../../assets/bgHome1.jpg"
function Home({ apparts }) {
console.log(apparts);
  return (
    <div className="home">
      <Banner imageSrc={ImageB} title="Chez vous, partout et ailleurs" />
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
