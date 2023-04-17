import Banner from "../../components/Banner/Banner";
import ImageA from "../../assets/bgHome2.jpg"
import { useLoaderData } from "react-router-dom";
import { API_getLodgingById } from "../../API";
import Collapse from "../../components/Collapse/Collapse";


export const getLodgingById = async ({ params }) => {
  const { lodgingId } = params;
  const appart = await API_getLodgingById(lodgingId);
  if (!appart) {
    throw new Error("Appart Not found");
  }
  return { appart };
};

function About() {
  const { appart } = useLoaderData();

  return (
    <><div className="wrapper about">
      <Banner imageSrc={ImageA} title="" />
    </div><Collapse title="Description">
        <p>{appart.description}</p>
      </Collapse><Collapse title="Equipements">
        <ul>
          {appart.equipments.map((equipts, index) => {
            return <li key={index}>{equipts}</li>;
          })}
        </ul>
      </Collapse></>
  
  );
}
export default About;
