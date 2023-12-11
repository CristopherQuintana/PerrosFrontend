import { useQuery } from "react-query";
import clienteAxios from "../Helpers/clienteAxios";

export function useQueryVerPerrosAceptados(id) {
  return useQuery({
    queryKey: ["xD", id],
    queryFn: queryVerPerrosAceptados,
    retry: 0,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    keepPreviousData: false,
    enabled: true,
  });
}

export const queryVerPerrosAceptados = async (params) => {
  const [queryName, id] = params.queryKey; 
  const { data } = await clienteAxios.get(`verPerrosAceptados/${id}`);
  return data;
};