import { Button, CircularProgress } from '@mui/material';
import { useQueryVerPerro } from '../Queries/queryVerPerro';
import CardPerro from './Components/CardPerro';
import { Link, useNavigate, useParams } from "react-router-dom";
import { useBorrarPerroMutation } from '../Mutations/mutationBorrarPerro';
import Swal from 'sweetalert2'
import Navbar from './Components/Navbar';

function VerPerro() {
    const paramsUrl = useParams();
    const { data: perro, isLoading, isSuccess, isError } = useQueryVerPerro(paramsUrl.id);
    const borrarPerro = useBorrarPerroMutation();
    const navigate = useNavigate();

    function alertaBorrado() {
        Swal.fire({
        title: "¿Quieres borrar al perro?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Borrar",
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          borrarPerro.mutate(perro.id)
          Swal.fire("Borrado!", "", "success");
          navigate('/');
        }
      });
    }

    return (
        <>
            <Navbar />
            {isLoading ? (
                // Muestra un círculo de carga mientras se carga el perro
                <CircularProgress />
            ) : (
                // Muestra la tarjeta del perro si la carga ha tenido éxito
                <>
                    <CardPerro id={perro?.id} nombre={perro?.nombre} imagen={perro?.foto_url} descripcion={perro?.descripcion} pagina='VerPerro' alerta={alertaBorrado}/>
                </>
            )}
        </>
    );
}

export default VerPerro;