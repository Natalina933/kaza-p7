import React from 'react'
import { useParams } from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel';

function Lodging({apparts}) {
 const {lodgingId}=useParams()
 const appart=apparts.find((appart)=>appart.id===lodgingId)
console.log(appart);

  return (
    <div className='wapperLodging'>
      <Carousel appartPictures={appart.pictures}/> 
    </div>
  )
}

export default Lodging