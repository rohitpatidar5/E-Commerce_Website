import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbos-description">
            <p>An e-commerce website is an online platform that faciliate buying and selling of product or servides over the internet </p>
            <p>
                E-commerce websites typically display products or servies a detailed description
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox