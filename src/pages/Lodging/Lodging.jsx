import React from 'react'
import { useParams } from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel';

function Lodging({apparts}) {
  const {lodgingId}=useParams()
  const appart=apparts.find((appart)=>appart.id===lodgingId)
console.log(appart);

  return (
    <><div className='wapperLodging'>
      <Carousel appartPictures={appart.pictures} />
    </div><div className="lodging__title">
        <h1>{appart.title}</h1>
        <h2>{appart.tags}</h2>
      </div>
      <div className="lodging__host">
        {/* <h2>{appart.host}</h2> */}
        <img src={appart.picture} alt={appart.title} />
        <div className='lodging__stars'></div>
      </div>
      <div className="lodging__description">
        <p>{appart.description}</p>
      </div>
      <div className="lodging__equipement">
        <p>{appart.equipements}</p>
      </div>
      </>
)
}

export default Lodging