import { Grid } from "@mui/material";
import CardPerro from "./CardPerro";

function CardContainer(props) {
    return (
      <Grid container spacing={2}>
        {props.perros.map((perro) => (
          <Grid item key={perro.id}>
            <CardPerro 
                nombre={perro.nombre} 
                imagen={perro.foto_url}
                id={perro.id}
                alerta={props.alerta}
                aceptar={props.aceptar}
                rechazar={props.rechazar}
                pagina={props.pagina} 
                version='list'/>
          </Grid>
        ))}
      </Grid>
    );
  }
  
  export default CardContainer