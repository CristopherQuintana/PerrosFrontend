import React from 'react';
import { useQueryVerPerrosAceptados } from '../Queries/queryVerPerrosAceptados';
import Typography from '@mui/material/Typography';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from './Components/Navbar';
import CardContainer from './Components/CardContainer';
import { Button, CircularProgress } from '@mui/material';

function ListaPerrosAceptados() {
  const paramsUrl = useParams();
  const { data: perrosAceptados, isLoading } = useQueryVerPerrosAceptados(paramsUrl.id);
  console.log(perrosAceptados)
  const navigate = useNavigate()
  const handleVolverClick = () => {
    navigate(-1);
  };
  return (
    <>
      <Navbar/>
      {isLoading ? <CircularProgress/> :
      perrosAceptados.message ?
      <Typography variant="h4" gutterBottom>
          Lo siento, no hay Perros
      </Typography> :
      <>
        <Typography variant="h4" gutterBottom>
          Perros Aceptados
        </Typography>
        <CardContainer perros={perrosAceptados}/>
        <Button variant="contained" color="inherit" onClick={handleVolverClick}>
          Volver
        </Button>
      </>
    }
    </>
  );
}

export default ListaPerrosAceptados;