

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ValidateId } from './Order/ValidateId'
import  {NavHeader}  from './NavHeader'
import { Orders } from './Orders'
import { Products } from './Products'
import { InsertProduct } from './Product/InsertProduct'

export const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<NavHeader/>} >
                    <Route path='/product' element={<Products/>}></Route>
                    <Route path='/add-product' element={<InsertProduct/>}></Route>

                    <Route path='/my-orders' element={<Orders/>}></Route>
                    <Route path='/add-order/:id' element={<ValidateId/>}></Route>

                    <Route path='/*' element={<Orders/>}></Route>
                </Route>
            </Routes>
        </>

    )
}
