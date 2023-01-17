import React from 'react'

const Card_test = (items) => {
    const {id, sale, photo, productName, productPrice, ProductDescription} =  items;
    console.log(items);
  return (
    <div>
        
        <img src={photo} alt='phot'/>
    </div>
  )
}

export default Card_test