import { useQuery } from "react-query";
import clienteAxios from "../Helpers/clienteAxios";

export function useQueryVerPerrosRechazados(id) {
  return useQuery({
    queryKey: ["queryPerrosRechazados", id],
    queryFn: queryVerPerrosRechazados,
    retry: 0,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    keepPreviousData: false,
    enabled: true,
  });
}

export const queryVerPerrosRechazados = async (params) => {
  const [queryName, id] = params.queryKey; 
  const { data } = await clienteAxios.get(`verPerrosRechazados/${id}`);
  return data;
};