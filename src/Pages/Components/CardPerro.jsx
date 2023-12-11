import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import { CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

function CardPerro(props) {

  const styles = {
    img: {
      maxWidth: props.version === 'list' ? '200px' : 'auto',
      maxHeight: props.version === 'list' ? '200px' : '400px',
      marginRight: props.descripcion ? '10px' : '0',
    },
    description: {
      flex: 1, // Hace que la descripción ocupe el espacio restante
    },
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.nombre}
        </Typography>
        <img src={props.imagen} alt={`Imagen de ${props.nombre}`} style={styles.img} />
      </CardContent>
      {props.descripcion && (
          <Typography variant="h7" component="div" style={styles.description}>
            {props.descripcion}
          </Typography>
      )}
      <CardActions>
        {props.pagina==='VerPerro' && (<>
          <Link reloadDocument to={`/CreatePerro`}>
            <Button variant="contained" color="success">
                Crear
            </Button>
          </Link>
          <Link reloadDocument to={`/EditPerro/${props.id}`}>
            <Button variant="contained" color="primary">
                Editar
            </Button>
          </Link>
          <Button variant="contained" color="error" onClick={props.alerta}> 
              Eliminar
          </Button>
          <Link to={`/InteresadosPerros/${props.id}`}>
            <Button variant="contained" color="info">
                Ver Interesados
            </Button>
          </Link>
          <Link to={`/CandidatosPerros/${props.id}`}>
            <Button variant="contained" color="inherit">
                Ver Candidatos
            </Button>
          </Link>
          <Link to={`/ListaPerrosAceptados/${props.id}`}>
            <Button variant="contained" color="success">
                Ver Aceptados
            </Button>
          </Link>
          <Link to={`/ListaPerrosRechazados/${props.id}`}>
            <Button variant="contained" color="warning">
                Ver Rechazados
            </Button>
          </Link>
        </>)}
        {props.pagina === 'InteresadosPerros' && (
          <Button variant="contained" color="success" onClick={() => props.alerta(props.id)}>
            Seleccionar
          </Button>
        )}
        {props.pagina === 'CandidatosPerros' && (
          <>
            <Button variant="contained" color="success" onClick={() => props.aceptar(props.id)}>
              Aceptar
            </Button>
            <Button variant="contained" color="error" onClick={() => props.rechazar(props.id)}>
              Rechazar
            </Button>
          </>
        )}
      </CardActions>
    </Card>
  );
};

export default CardPerro