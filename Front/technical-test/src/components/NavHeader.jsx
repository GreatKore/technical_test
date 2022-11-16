
import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'


export const NavHeader = () => {
    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                    display: 'flex',
                }}>

                <Grid item>
                    <Typography variant="h5" component={Link} to={'/my-orders'} sx={{
                        textDecoration: 'none',
                        color:'black'}}>Technical Test</Typography>
                </Grid>

                <Grid
                    item xs={4}
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center">

                    <Button component={Link} to={'/product'} sx={{textDecoration: 'none', color:'black'}}>Products</Button>
                    <Button component={Link} to={'/my-orders'} sx={{textDecoration: 'none', color:'black'}}>Orders</Button>

                </Grid>

            </Grid>
            <hr></hr>
            <br />
            <Outlet />
        </>
    )
}
