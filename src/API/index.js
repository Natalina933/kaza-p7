import apparts from "../datas/appartement.json";
import '@fortawesome/fontawesome-svg-core/styles.css';


export const API_getAllLodgings = async () => {
  return apparts;
};

export const API_getLodgingById = async (id) => {
  return apparts.find((elt) => elt.id === id);
};

