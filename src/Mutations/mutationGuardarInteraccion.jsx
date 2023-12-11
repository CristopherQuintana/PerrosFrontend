import { useMutation } from "react-query";
import clienteAxios from "../Helpers/clienteAxios";

export function useMutationGuardarInteraccion(refetch) {
  return useMutation({
    mutationFn: ({idInteresado, idCandidato}) => 
    clienteAxios.post(`guardarInteraccion/${idInteresado}/${idCandidato}`),
    onError: (error) => {
      console.error("Error al guardar interaccion", error);
    },
  });
}
