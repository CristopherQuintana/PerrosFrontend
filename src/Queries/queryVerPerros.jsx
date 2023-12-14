import { useQuery } from "react-query";
import clienteAxios from "../Helpers/clienteAxios";

export function useQueryVerPerros () {
  return useQuery({
    queryFn: queryVerPerros,
    retry: 0,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    keepPreviousData: false,
    enabled: true,
  });
}

export const queryVerPerros = async (params) => {
  const { data } = await clienteAxios.get(`verPerrosGeneral`);
  return data;
};