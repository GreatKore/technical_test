
import { Button, FormControl, Grid, TextField  } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';


export const EditForm = (props) => {


    const [oneOrder, setOrder] = useState();
    const [allProduct, setAllProduct] = useState();

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

    useEffect(() => {
        setOrder(props.ord);
    }, [props.ord])

    useEffect(() => {
        setAllProduct(props.prod);
    }, [props.prod])
    


    return (
        <FormControl
            sx={{
                mt: '20px',
                ml: '10%'
            }}>

            {
                oneOrder?.map(item => {
                    return (
                        <>
                            <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                            >


                                <TextField
                                    label="N° Order"
                                    type='text'
                                    defaultValue={item.nro_order}
                                    variant='outlined'
                                    inputProps={
                                        { readOnly: true, }
                                    }
                                    sx={{ mb: '10px', mr: '40px' }} />


                                <TextField
                                    label="Date"
                                    type='text'
                                    defaultValue={item.date}
                                    variant='outlined'
                                    inputProps={
                                        { readOnly: true, }
                                    }
                                    sx={{ mb: '10px', mr: '40px' }} />

                                <TextField label="Final Price"
                                    type='text'
                                    defaultValue={item.final_price}
                                    variant='outlined'
                                    inputProps={
                                        { readOnly: true, }
                                    }
                                    sx={{ mb: '10px' }} />

                            </Grid>

                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

                                {allProduct?.map((value) => {
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
                                    <Button variant="contained">Update</Button>
                                </Grid>

                                <Grid item>
                                    <Link style={{ textDecoration: 'none' }} to='/my-orders'>
                                        <Button variant="outlined">Back</Button>
                                    </Link>
                                </Grid>

                            </Grid>



                        </>
                    )

                })
            }

        </FormControl>
    )
}
