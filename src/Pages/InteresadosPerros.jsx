import { Link, useNavigate, useParams } from "react-router-dom";
import { useQueryObtenerPerrosInteresados } from "../Queries/queryObtenerPerrosInteresados";
import CardContainer from "./Components/CardContainer";
import { Button, CircularProgress, Typography, useThemeProps } from "@mui/material";
import Navbar from "./Components/Navbar";
import Swal from "sweetalert2";
import { useMutationGuardarInteraccion } from "../Mutations/mutationGuardarInteraccion";
import { useEffect, useState } from "react";

function InteresadosPerros(){
    const paramsUrl = useParams();
    const navigate = useNavigate();
    const { data: perrosInteresados, isLoading, isError, refetch } = useQueryObtenerPerrosInteresados(paramsUrl.id, 5);
    const [perros, setPerros] = useState([])
    const guardarInteraccion = useMutationGuardarInteraccion()
    useEffect(() => {
      if (perrosInteresados) {
        setPerros(perrosInteresados);
      }
    }, [perrosInteresados]);

    useEffect(() => {
      if ((!perros || perros.length === 0) && guardarInteraccion.isSuccess) {
        refetch();
      }
    }, [perros, refetch, guardarInteraccion.isSuccess]);

    const handleVolverClick = () => {
      navigate(-1);
    };
    
    const handleSeleccion = (perroId) => {
    Swal.fire({
      title: "¿Quieres seleccionar a este perro?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Seleccionar",
      denyButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        guardarInteraccion.mutate({idInteresado:paramsUrl.id, idCandidato:perroId}, {
          onSuccess:() => setPerros(perros.filter((perro) => perro.id!==perroId))
        })
      }
    });
  };
    return <>
            <Navbar/>
            {isLoading ? <CircularProgress/> :
            perros.length > 0 ? (
              <CardContainer perros={perros} alerta={handleSeleccion} pagina='InteresadosPerros' />
            ) : (
              <Typography variant="h5" align="center" style={{ marginTop: '20px' }}>
                Lo siento, no hay más perros
              </Typography>)}
              <Link to={`/CandidatosPerros/${paramsUrl.id}`}>
                <Button variant="contained" color="inherit">
                  Ir a Candidatos
                </Button>
              </Link>
              <Button variant="contained" color="inherit" onClick={handleVolverClick}>
                Volver
              </Button>
           </>
           
}

export default InteresadosPerros;