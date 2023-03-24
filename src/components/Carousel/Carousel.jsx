import React from 'react'
import leftarrow from "../../assets/leftarrow.svg"
import rightarrow from "../../assets/rightarrow.svg"

function Carousel({appartPictures}) {
    console.log(appartPictures);
  return (
    <div className='carousel'>
        <img className='leftarrow' src={leftarrow} alt="/" />
        <img src={appartPictures[0]} alt="" />
        <img className='rightarrow' src={rightarrow} alt="/" />
    </div>
  )
}

export default Carousel