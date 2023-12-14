import { useQuery } from "react-query";
import clienteAxios from "../Helpers/clienteAxios";

export function useQueryObtenerPerrosCandidatos(id, numero) {
  return useQuery({
    queryKey: ["queryObtenerPerrosCandidatos", {id, numero}],
    queryFn: queryObtenerPerrosCandidatos,
    retry: 0,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    keepPreviousData: false,
    enabled: true,
  });
}

export const queryObtenerPerrosCandidatos = async (params) => { 
  const [queryName, param] = params.queryKey;
  const { data } = await clienteAxios.get(`obtenerPerrosCandidatos/${param.id}`, {params:{numero:param.numero}});
  return data;
};