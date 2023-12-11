import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardContainer from "./Components/CardContainer";
import { Button, CircularProgress, Typography } from "@mui/material";
import Navbar from "./Components/Navbar";
import Swal from "sweetalert2";
import { useMutationGuardarPreferencias } from "../Mutations/mutationGuardarPreferencias";
import { useQueryObtenerPerrosCandidatos } from "../Queries/queryObtenerPerrosCandidatos";

function CandidatosPerros() {
  const paramsUrl = useParams();
  const { data: candidatosPerros, isLoading, isError, refetch } = useQueryObtenerPerrosCandidatos(paramsUrl.id, 5);
  const guardarPreferencia = useMutationGuardarPreferencias();
  const [perros, setPerros] = useState([]);
  const navigate = useNavigate()
  const handleVolverClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (candidatosPerros) {
      setPerros(candidatosPerros);
    }
  }, [candidatosPerros]);

  useEffect(() => {
    if ((!perros || perros.length === 0) && guardarPreferencia.isSuccess) {
      refetch();
    }
  }, [perros, refetch, guardarPreferencia.isSuccess]);

  const handleAceptar = (perroId) => {
    Swal.fire({
      title: '¿Quieres aceptar a este perro?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      denyButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        guardarPreferencia.mutate( 
          {idInteresado:paramsUrl.id, idCandidato:perroId, preferencia:'aceptado'}, {
          onSuccess: (json) => {setPerros(perros.filter((perro) => perro.id!==perroId))
          if (json.data.message === 'Hay match') {
            Swal.fire({
              icon: 'success',
              title: '¡Hay un Match!',
              text: '¡Felicidades!',
            });
          }},
        });
      }
    });
  };

  const handleRechazar = (perroId) => {
    Swal.fire({
      title: '¿Quieres rechazar a este perro?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Rechazar',
      denyButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        // Lógica de rechazar
        guardarPreferencia.mutate(
          {idInteresado:paramsUrl.id, idCandidato:perroId, preferencia:'rechazado'}, {
          onSuccess: () => setPerros(perros.filter((perro) => perro.id!==perroId)),
        });
      }
    });
  };

  return (
    <>
      <Navbar />
      {isLoading ? (
        <CircularProgress />
      ) : perros.length > 0 ? (
        <CardContainer
          perros={perros}
          aceptar={handleAceptar}
          rechazar={handleRechazar}
          pagina='CandidatosPerros'
        />
      ) : (
        <Typography variant='h5' align='center' style={{ marginTop: '20px' }}>
          Lo siento, no hay más perros
        </Typography>
      )}
      <Button variant="contained" color="inherit" onClick={handleVolverClick}>
        Volver
      </Button>
    </>
  );
}

export default CandidatosPerros;