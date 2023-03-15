import Banner from "../../components/Banner/Banner";

function About() {
  const index = 2;

  return (
    <div className="wrapper about">
      <Banner imageSrc={`./bgHome${index}.jpg`} />
    </div>
  );
}
export default About;
