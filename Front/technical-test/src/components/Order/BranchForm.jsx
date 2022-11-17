

import { Button, FormControl, FormHelperText, Grid, Input, InputLabel, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { EditForm } from './EditForm';
import { InsertFormOrder } from './InsertForm';



export const BranchForm = (props) => {

    const idOrders = props.id ? props.id : ':id';

    const title = idOrders != ':id' ? 'Edit Order' : 'Insert Order';


    const [order, setOrder] = useState([]);
    const [products, setProducts] = useState([]);


    const getOneOrder = async () => {
        const url = `http://localhost:4000/api/v1/order/${idOrders}`;
        const result = await axios.get(url);
        setOrder([result.data]);
    }

    const getProducts = async () => {
        const url = `http://localhost:4000/api/v1/product`;
        const result = await axios.get(url);
        setProducts(result.data);
    }

    useEffect(() => {
        getOneOrder();
    }, [])
    useEffect(() => {
        getProducts();
    }, [])



    return (
        <>
            <Typography variant='h4'
                sx={{
                    mt: '20px',
                    ml: '10%'
                }}>
                {title}
            </Typography>

            {
                props.id ? <EditForm ord={order} prod={products}/> : <InsertFormOrder prod={products}/>
            }
            
        </>
    )
}
