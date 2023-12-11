import { Button, Typography } from "@mui/material";
import Navbar from "./Components/Navbar";
import { Link } from "react-router-dom";

function Inicio() {
    return <>
    <Navbar/>
    <Typography variant="h1" component="div">
        Bienvenido al Tinder de Perros
    </Typography>
    <Link reloadDocument to={`/CreatePerro`}>
        <Button variant="contained" color="success">
            Crear
        </Button>
    </Link>
    

</>}

export default Inicio