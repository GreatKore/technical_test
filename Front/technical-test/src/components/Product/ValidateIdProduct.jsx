

import React from 'react'
import { useParams } from 'react-router-dom';
import { BranchFormProduct } from './BranchFormProduct';

export const ValidateIdProduct = () => {

    const params = useParams();

    console.log(params.id);


    return (
        <>
            {params.id === ':id' ? <BranchFormProduct /> : <BranchFormProduct id={params.id} />}
        </>
    )
}
