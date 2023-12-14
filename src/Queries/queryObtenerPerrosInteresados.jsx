import { useQuery } from "react-query";
import clienteAxios from "../Helpers/clienteAxios";

export function useQueryObtenerPerrosInteresados(id, numero) {
  return useQuery({
    queryKey: ["queryObtenerPerrosInteresados", {id, numero}],
    queryFn: queryObtenerPerrosInteresados,
    retry: 0,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    keepPreviousData: false,
    enabled: true,
  });
}

export const queryObtenerPerrosInteresados = async (params) => { 
  const [queryName, param] = params.queryKey;
  const { data } = await clienteAxios.get(`obtenerPerrosInteresados/${param.id}`, {params:{numero:param.numero}});
  return data;
};