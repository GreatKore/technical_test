

import React, { useEffect, useState } from 'react'

import { Button, Grid, TextField, TableHead, Typography, TextFieldaphy } from "@mui/material"
import "../assets/style.css"
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from "@mui/material/Modal";
import { Link } from 'react-router-dom';
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };


    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};




export const Products = () => {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const [modalEliminar, setModalEliminar] = useState(false);

    const [product, setProduct] = useState([]);
    const [search, setSearch] = useState("");


    const getProduct = async () => {
        const url = 'http://localhost:4000/api/v1/product';
        const result = await axios.get(url);
        setProduct(result.data);
    }
   

    useEffect(() => {
        getProduct();
    }, [product])


    const [invitadoSeleccionado, setInvitadoSeleccionado] = useState({
        
    });

    const onDelete = (elemento, caso) => {
        setInvitadoSeleccionado(elemento);
        switch (caso) {
            case 'Editar':
                break;
            case 'Eliminar':
                setModalEliminar(true)
                break;
        }
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setInvitadoSeleccionado((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }




    const eliminar = () => {
        setProduct(product.filter(invitado => invitado.id !== invitadoSeleccionado.id));
        setModalEliminar(false);
    }


    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - product.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    return (
        <>
            <Grid container className="containerInvite">
                <Grid container justifyContent={"center"} mt={2}>
                    <Grid item xs={12} md={10}>
                        <Grid xs={12} mb={2}>

                            <Grid container spacing={1}>
                                <Grid item xs={12} md={3}>
                                    <Typography variant={"h5"} sx={{ textDecoration: 'none' }} className="title__main">PRODUCTS</Typography>
                                </Grid>
                                <Grid item xs={8} md={6} mt={1}>
                                    <Paper
                                        component="form"
                                        sx={{ p: '0px 2px', display: 'flex', alignItems: 'center' }}
                                    >

                                        <InputBase
                                            // value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                            on
                                            sx={{ ml: 1, flex: 1 }}
                                            placeholder="Search"
                                        />
                                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                            <SearchIcon />
                                        </IconButton>


                                    </Paper>
                                </Grid>

                                <Grid item xs={4} md={3}>
                                    {/* <Button fullWidth className="btn-agregar" ></Button> */}
                                    <Grid display="flex" justifyContent={"flex-end"}>
                                        <Link style={{textDecoration: 'none'}} to='/add-product/:id'>
                                            <IconButton  sx={{ marginLeft: '5px' }}>
                                                <Button variant="contained">Add Product</Button>
                                            </IconButton>
                                        </Link>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={10} mt={3}>
                        <TableContainer component={Paper} >
                            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                                <TableHead >
                                    <TableRow style={{ background: "#3b3b3b" }}>
                                        <TableCell style={{ textAlign: "start", padding: "12px", color: "#fff" }}>Id</TableCell>
                                        <TableCell style={{ textAlign: "start", padding: "12px", color: "#fff" }}>Name</TableCell>
                                        <TableCell style={{ textAlign: "start", padding: "12px", color: "#fff" }}>Price</TableCell>
                                        <TableCell style={{ textAlign: "start", padding: "12px", color: "#fff" }}>Stock</TableCell>
                                        <TableCell style={{ textAlign: "start", padding: "12px", color: "#fff" }}>Total Price</TableCell>
                                        <TableCell style={{ textAlign: "center", padding: "12px", color: "#fff" }}>Acciones</TableCell>
                                    </TableRow>
                                </TableHead>


                                <TableBody>
                                    {(rowsPerPage > 0
                                        ? product?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        : product
                                    ).filter(item => item.name?.toLowerCase(search).includes(search) || item.idProduct?.includes(search))
                                        .map((item) => (
                                            <TableRow key={item.idProduct}>
                                                <TableCell component="th" scope="row" className="cell1">
                                                    {item.idProduct}
                                                </TableCell>
                                                <TableCell className="cell">
                                                    {item.name}
                                                </TableCell>
                                                <TableCell className="cell">
                                                    {item.unit_price}
                                                </TableCell>
                                                <TableCell className="cell">
                                                    {item.qty}
                                                </TableCell>
                                                <TableCell className="cell">
                                                    {item.total_price}
                                                </TableCell>

                                                <TableCell>
                                                    <Grid container spacing={1}>
                                                        <Grid item xs={4}>
                                                            <IconButton>
                                                                <Link to={`/add-product/${item.idProduct}`}>
                                                                    <EditIcon style={{ color: "#469489 " }} />
                                                                </Link>
                                                            </IconButton>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <IconButton onClick={() => onDelete(item, 'Eliminar')}>
                                                                <DeleteIcon style={{ color: "#b10202" }} />
                                                            </IconButton>
                                                        </Grid>
                                                    </Grid>
                                                </TableCell>
                                            </TableRow>
                                        ))}

                                    {emptyRows > 0 && (
                                        <TableRow style={{ height: 53 * emptyRows }}>
                                            <TableCell colSpan={6} />
                                        </TableRow>
                                    )}
                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TablePagination
                                            rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                            colSpan={3}
                                            count={product?.filter(item => item.idOrder?.includes(search)).length}
                                            rowsPerPage={rowsPerPage}
                                            page={page}
                                            SelectProps={{
                                                TextFieldProps: {
                                                    'aria-label': 'rows per page',
                                                },
                                                native: true,
                                            }}
                                            onPageChange={handleChangePage}
                                            onRowsPerPageChange={handleChangeRowsPerPage}
                                            ActionsComponent={TablePaginationActions}
                                            sx={{width:'50%'}}
                                        />
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>

            </Grid>

            

            {/*MODAL ELIMINAR*/}
            <Modal
                open={modalEliminar}
                onClose={() => {
                    setModalEliminar(true)
                }}
            >
                <Box sx={style}>
                    <div >
                        <form>
                            <Typography
                                textAlign="center"
                                variant="h6"
                                id="transition-modal-title"
                                sx={{ color: "#000", fontWeight: "bold" }}
                            >
                                Estás Seguro que deseas eliminar al Doctor {invitadoSeleccionado && invitadoSeleccionado.nombre}
                            </Typography>
                            <Grid container spacing={1} justifyContent="center">
                                <Grid container spacing={1} mt={2}>
                                    <Grid item xs={6}>
                                        <Button fullWidth variant="contained" onClick={() => eliminar()}>Si</Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button fullWidth className="btn-cancelar" onClick={() => setModalEliminar(false)}>NO</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Box>
            </Modal>

            
        </>
    )
}