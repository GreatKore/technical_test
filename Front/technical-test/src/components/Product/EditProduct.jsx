

import React, { useState } from 'react'

export const EditProduct = (props) => {

    console.log(props.prod);
    const [product, setProduct] = useState(props.prod);

  return (
    <div>EditProduct</div>
  )
}
