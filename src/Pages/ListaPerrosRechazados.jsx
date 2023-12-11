import { useNavigate, useParams } from 'react-router-dom';
import { useQueryVerPerrosRechazados } from '../Queries/queryVerPerrosRechazados';
import { Button, CircularProgress, Typography } from '@mui/material';
import Navbar from './Components/Navbar';
import CardContainer from './Components/CardContainer';


function ListaPerrosRechazados() {
  const paramsUrl = useParams();
  const { data: perrosRechazados, isLoading } = useQueryVerPerrosRechazados(paramsUrl.id);
  const navigate = useNavigate();
  const handleVolverClick = () => {
    navigate(-1);
  };

  return (
    <>
      <Navbar/>
      {isLoading ? <CircularProgress/> :        
        perrosRechazados.message ?
      <Typography variant="h4" gutterBottom>
          Lo siento, no hay Perros
      </Typography> :
      <>
        <Typography variant="h4" gutterBottom>
          Perros Aceptados
        </Typography>
        <CardContainer perros={perrosRechazados}/>
        <Button variant="contained" color="inherit" onClick={handleVolverClick}>
          Volver
        </Button>
      </>}
    </>
  );
}

export default ListaPerrosRechazados;