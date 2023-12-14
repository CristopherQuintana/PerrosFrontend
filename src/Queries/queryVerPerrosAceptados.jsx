import { useQuery } from "react-query";
import clienteAxios from "../Helpers/clienteAxios";

export function useQueryVerPerrosAceptados(id) {
  return useQuery({
    queryKey: ["VerPerrosAceptados", id],
    queryFn: queryVerPerrosAceptados,
    retry: 0,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    keepPreviousData: false,
    enabled: true,
  });
}

export const queryVerPerrosAceptados = async (params) => {
  const [queryName, id] = params.queryKey; 
  const { data } = await clienteAxios.get(`verPerrosAceptados/${id}`);
  return data;
};