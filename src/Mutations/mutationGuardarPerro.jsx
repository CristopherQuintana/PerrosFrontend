import { useMutation } from "react-query";
import clienteAxios from "../Helpers/clienteAxios";

export function useMutationGuardarPerro() {
  return useMutation({
    mutationFn: (params) => {return clienteAxios.post(`guardarPerro/`, params)},
    onError: (error) => {
      console.error("Error al guardar el perro", error);
    },
    onSuccess: () => {
      console.log("Perro Guardado")
    },
    onMutate: (params) => console.log(params)
  });
}