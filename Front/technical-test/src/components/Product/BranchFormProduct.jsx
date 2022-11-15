
import { Button, FormControl, FormHelperText, Grid, Input, InputLabel, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { EditProduct } from './EditProduct';
import { InsertProduct } from './InsertProduct';




export const BranchFormProduct = (props) => {

    const idProduct = props.id ? props.id : ':id';

    const title = idProduct != ':id' ? 'Edit Product' : 'Insert Product';


    const [product, setProduct] = useState([]);


    const getOneProduct = async () => {
        const url = `http://localhost:4000/api/v1/order/${idProduct}`;
        const result = await axios.get(url);
        setProduct([result.data]);
    }


    useEffect(() => {
        getOneProduct();
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
                props.id ? <EditProduct prod={product}/> : <InsertProduct/>
            }
            
        </>
    )
}
