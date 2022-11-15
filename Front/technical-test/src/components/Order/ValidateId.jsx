

import React from 'react'
import { useParams } from 'react-router-dom'
import {BranchForm} from './BranchForm'

export const ValidateId = () => {

    const params = useParams();
    
  return (
    <>
        { params.id === ':id'? <BranchForm/> :<BranchForm id={params.id}/>  } 
    </>
  )
}
