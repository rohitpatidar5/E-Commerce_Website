import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext.jsx'
import Breadcrums from '../Components/Breadcrums/Breadcrum.jsx'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay.jsx'
import { useParams } from 'react-router-dom'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox.jsx'

const Product = () => {
  const { all_Product } = useContext(ShopContext);
  const { productId } = useParams();
 const product = all_Product.find((e)=> e.id === Number(productId));
  return (
    <div>
        <Breadcrums product={product}/>
        <ProductDisplay product={product} />
        <DescriptionBox/>
    </div>
  )
}

export default Product