import React, { useState, useEffect } from 'react';
import { Button, TextField, Typography, Container, Grid, Card, CardContent, CardActions, CircularProgress } from '@mui/material';
import { useImagenPerroRandom } from '../../Queries/queryImagenPerroRandom';
import { useMutationGuardarPerro } from '../../Mutations/mutationGuardarPerro';
import { useMutationActualizarPerro } from '../../Mutations/mutationActualizarPerro';
import { useNavigate } from 'react-router-dom';

function FormPerro({ formType, initialValues }) {
  const { data: imagenAleatoria, isLoading: isLoadingAleatoria, refetch: refetchAleatoria } = useImagenPerroRandom();
  const [imagenExistente, setImagenExistente] = useState(initialValues.foto || ''); // Asumiendo que el campo se llama 'foto'
  const [nombre, setNombre] = useState(initialValues.nombre || '');
  const [descripcion, setDescripcion] = useState(initialValues.descripcion || '');
  console.log(imagenAleatoria)
  const guardarPerro = useMutationGuardarPerro();
  const editarPerro = useMutationActualizarPerro();
  const navigate = useNavigate()
  const handleVolverClick = () => {
    navigate(-1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formType === 'create') {
      guardarPerro.mutate({
        nombre,
        foto: imagenExistente || imagenAleatoria,
        descripcion,
      },
      {
      onSuccess: (json) => {
        // Redirigir a la página específica después de la creación
        navigate(`/VerPerro/${json.data.id}`);
      },

    });
    } else if (formType === 'edit') {
      editarPerro.mutate(initialValues.id, {
        nombre,
        foto: imagenExistente || imagenAleatoria,
        descripcion,
      },{
      onSuccess: () => {
        // Redirigir a la página específica después de la creación
        navigate(`/VerPerro/${initialValues.id}`);
      },
    });
    }
  };

  return (
    <Container maxWidth="md">
      <form onSubmit={handleSubmit}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              {formType === 'create' ? 'Registro' : 'Edición'} de Perro
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                {isLoadingAleatoria ? (
                  <CircularProgress />
                ) : (
                  <img src={imagenExistente || imagenAleatoria} alt="foto" style={{ width: '50%', height: 'auto' }} />
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Nombre"
                  fullWidth
                  required
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Descripción"
                  fullWidth
                  multiline
                  rows={4}
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button type="submit" variant="contained" color="primary">
              {formType === 'create' ? 'Registrar' : 'Actualizar'} Perro
            </Button>
            <Button variant="outlined" color="primary" onClick={() => {refetchAleatoria() 
                                                                      setImagenExistente('')}}>
              Cambiar Imagen Aleatoria
            </Button>
            <Button variant="contained" color="inherit" onClick={handleVolverClick}>
              Volver
            </Button>
          </CardActions>
        </Card>
      </form>
    </Container>
  );
}

export default FormPerro;