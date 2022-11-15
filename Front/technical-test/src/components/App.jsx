

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ValidateId } from './Order/ValidateId'
import { ValidateIdProduct } from './Product/ValidateIdProduct'
import  {NavHeader}  from './NavHeader'
import { Orders } from './Orders'
import { Products } from './Products'

export const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<NavHeader/>} >
                    <Route path='/Products' element={<Products/>}></Route>
                    <Route path='/add-product/:id' element={<ValidateIdProduct/>}></Route>

                    <Route path='/my-orders' element={<Orders/>}></Route>
                    <Route path='/add-order/:id' element={<ValidateId/>}></Route>

                    <Route path='/*' element={<Orders/>}></Route>
                </Route>
            </Routes>
        </>

    )
}
