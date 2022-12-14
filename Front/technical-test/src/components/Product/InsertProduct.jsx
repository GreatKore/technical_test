

import { alertClasses, Button, FormControl, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate  } from 'react-router-dom';


export const InsertProduct = () => {

  const count = useParams();
  const history = useNavigate();
  const id = parseInt(count.count);

  const [data, setData] = useState({
    idProduct: 0,
    name: '',
    unit_price: 0.0,
    qty: 0,
    total_price: 0.0
  });

  const [product, setProduct] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setProduct({
      ...data,
      idProduct: id + 1,
      total_price: data.unit_price * data.qty
    });
  }


  const saveProduct = async (dataSend) => {
    const url = `http://localhost:4000/api/v1/product`;
    const result = await axios.post(url, dataSend).then(function (response) {
      console.log(response);
    })
      .catch(function (error) {
        console.log(error);
      });
  }


  const onSave = (e) => {
    
    console.log(product);
    saveProduct(product);
    history("/product");
  }

  useEffect(() => {
    saveProduct();
  }, [])

  return (
    <FormControl>
      <Grid>
        <Typography variant='h4' sx={{
          mt: '20px',
          ml: '10%'
        }}>Insert Product</Typography>

        <TextField
          id="outlined-basic"
          name="idProduct"
          value={data && data?.idProduct}
          onChange={handleChange}
          sx={{ visibility: 'hidden' }}
          inputProps={
            {
              readOnly: true,
            }
          }
          variant="outlined"></TextField>
        <br />

        <Grid container
          direction="row"
          sx={{
            mt: '20px',
            ml: '10%',
            width: '100%'
          }}>

          <TextField
            id="outlined-basic"
            label="Name Product"
            name="name"
            value={data && data?.name}
            onChange={handleChange}
            variant="outlined"
            sx={{ ml: '10px', mr: '20px' }}></TextField>


          <TextField
            id="outlined-basic"
            label="Unit Price"
            value={data && data?.unit_price}
            name="unit_price"
            onChange={handleChange}
            variant="outlined"
            sx={{ mr: '20px' }}></TextField>

          <TextField
            id="outlined-basic"
            label="Stock"
            name="qty"
            value={data && data?.qty}
            onChange={handleChange}
            variant="outlined"
            sx={{ mr: '20px' }}></TextField>

        </Grid>


        <br />


          <Button variant='contained' onClick={onSave}
            sx={{ ml: '40%' }}>Add Product</Button>


        <Link style={{ textDecoration: 'none' }} to={'/product'}>
          <Button variant='outlined'
            sx={{ ml: '10px' }}>Back</Button>
        </Link>

      </Grid>
    </FormControl>
  )
}
