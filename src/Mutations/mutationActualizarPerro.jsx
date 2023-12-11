import { useMutation } from "react-query";
import clienteAxios from "../Helpers/clienteAxios";

export function useMutationActualizarPerro() {
  return useMutation({
    mutationFn: (id, params) => {clienteAxios.put(`actualizarPerro/${id}`, params)},
    onError: (error) => {
      console.error("Error al editar el perro", error);
    },
    onSuccess: () => {
      console.log("Perro Editado")
    },
    onMutate: (params) => console.log(params)
  });
}