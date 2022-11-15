

import { Button, FormControl, FormHelperText, Grid, Input, InputLabel, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';


export const InsertFormOrder = (props) => {

    const [products, setProducts] = useState(props.prod);
    console.log(products);

    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const date = new Date();
    const formatDate = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();

    const generateIdOrder = () => {
        const numbers = "0123456789";
        let aleatoria = "";
        for (let i = 0; i < 7; i++) {
            aleatoria += numbers.charAt(Math.floor(Math.random() * numbers.length));
        }
        return aleatoria;
    };


    return (
        <FormControl
            sx={{
                mt: '20px',
                ml: '10%'
            }}>

            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >


                <TextField
                    label="N° Order"
                    type='text'
                    defaultValue={generateIdOrder()}
                    variant='outlined'
                    inputProps={
                        { readOnly: true, }
                    }
                    sx={{ mb: '10px', mr: '40px' }} />


                <TextField
                    label="Date"
                    type='text'
                    defaultValue={formatDate}
                    variant='outlined'
                    inputProps={
                        { readOnly: true, }
                    }
                    sx={{ mb: '10px', mr: '40px' }} />

                <TextField label="Final Price"
                    type='text'
                    defaultValue='12'
                    variant='outlined'
                    inputProps={
                        { readOnly: true, }
                    }
                    sx={{ mb: '10px' }} />

            </Grid>

            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

                {products?.map((value) => {
                    const labelId = `checkbox-list-label-${value.idProduct}`;

                    return (
                        <ListItem
                            key={value.idProduct}
                            secondaryAction={
                                <ListItemText id={labelId} primary={'$ ' + value.unit_price} />
                            }
                            disablePadding
                        >
                            <ListItemButton role={undefined} onClick={handleToggle(value.idProduct)} dense>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={checked.indexOf(value.idProduct) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={value.name} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
            <Grid>

            </Grid>

            <Grid
                container
                direction="row"
                spacing={{ xs: 2, md: 3 }}
                justifyContent="center"
                alignItems="center">
                <Grid item>
                    <Button variant="contained">Insert</Button>
                </Grid>

                <Grid item>
                    <Link style={{ textDecoration: 'none' }} to='/my-orders'>
                        <Button variant="outlined">Back</Button>
                    </Link>
                </Grid>

            </Grid>


        </FormControl>
    )
}
