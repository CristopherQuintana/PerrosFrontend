import { useMutation } from "react-query";
import clienteAxios from "../Helpers/clienteAxios";

export function useBorrarPerroMutation() {
  return useMutation({
    mutationFn: (id) => {return clienteAxios.delete(`borrarPerro/${id}`)},
    onError: (error) => {
      console.error("Error al borrar al perro", error);
    },
    onSuccess: () => {
      console.log("Perro Borrado")
    },
    onMutate: (id) => console.log(id)
  });
}
