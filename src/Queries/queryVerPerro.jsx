import { useQuery } from "react-query";
import clienteAxios from "../Helpers/clienteAxios";

export function useQueryVerPerro (id) {
  return useQuery({
    queryKey: ["VerPerro", id],
    queryFn: queryVerPerro,
    retry: 0,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    keepPreviousData: false,
    enabled: true,
  });
}

export const queryVerPerro = async (params) => {
  const [queryName, id] = params.queryKey;
  const { data } = await clienteAxios.get(`verPerro/${id}`);
  return data;
};