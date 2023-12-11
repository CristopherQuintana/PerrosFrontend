import { useQuery } from "react-query";
import clienteAxios from "../Helpers/clienteAxios";

export function useBuscarInfoQuery() {
  return useQuery({
    queryFn: buscarInfoQuery,
    retry: 0,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    keepPreviousData: false,
    enabled: true,
  });
}

export const buscarInfoQuery = async () => { 
  const { data } = await clienteAxios.get(`obtenerPerroRandom`);
  return data;
};