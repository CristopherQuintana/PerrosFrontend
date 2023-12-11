import { useMutation } from "react-query";
import clienteAxios from "../Helpers/clienteAxios";

export function useMutationGuardarPreferencias() {
  return useMutation({
    mutationFn: ({idInteresado, idCandidato, preferencia}) => clienteAxios.put(`guardarPreferencias/${idInteresado}/${idCandidato}`, {'preferencia':preferencia})
  });
}