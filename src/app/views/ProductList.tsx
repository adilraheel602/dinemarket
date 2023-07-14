import React from 'react'
import Image from 'next/image'
import P1 from '/public/p1.webp'
import P2 from '/public/p2.webp'
import P3 from '/public/p3.webp'

import ProductCart from '../components/layout/ProductCart'

const ProductList = () => {
    return (
        <div className='flex justify-evenly mt-16 ' >
            <ProductCart title='Brushed Raglan Sweatshirt' price={195} img={P1} />
            <ProductCart title='Cameryn Sash Tie Dress' price={545} img={P2}   />
            <ProductCart title='Flex Sweatshirt' price={175} img={P3}   />
        </div>
    )
}

export default ProductList
