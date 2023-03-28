export const API_getAllLodgings=async ()=>{
  const data = await fetch("../datas/appartement.json");
  return await data.json();
}
