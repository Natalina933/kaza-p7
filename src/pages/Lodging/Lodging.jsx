import React from 'react'
import { useParams } from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel';

function Lodging({apparts}) {
  const {lodgingId}=useParams()
  const appart=apparts.find((appart)=>appart.id===lodgingId)
console.log(appart);

  return (
    <><div className="lodging__page">
      <div className='lodging__carousel'>
        <Carousel appartPictures={appart.pictures} />
      </div>
      
      <div className="lodging__wrapper">
        <div className="lodging__title">
            <h1>{appart.title}</h1>
            <h2>{appart.location}</h2>
          </div>
          <div className="lodging__host">
            <div className="lodging__tags">
              <ol>
                <li>Cosy</li>
                <li>Canal</li>
                <li>Paris 10</li>
              </ol>
            </div>
            <h2>{appart.host.name}</h2>
            <div className='lodging__hostImg'><img src={appart.host.picture} alt={"Photo de "+ appart.title} /></div>
        
            <div className='lodging__stars'></div>
            <div>étoile</div>
            <div>étoile</div>
            <div>étoile</div>
            <div>étoile</div>
            <div>étoile</div>
          </div>
          <div className="lodging__description">
            <p>{appart.description}</p>
          </div>
          <div className="lodging__equipement">
            <p>{appart.equipements}</p>
          </div>
            </div>
      </div>
      </>
)
}

export default Lodging