import { useQuery } from "react-query";
import Axios from "axios";

export function useImagenPerroRandom() {
  return useQuery({
    queryFn: imagenPerroRandom,
    retry: 0,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    keepPreviousData: false,
    enabled: true,
  });
}

export const imagenPerroRandom = async () => { 
  const { data } = await Axios.get(`https://dog.ceo/api/breeds/image/random`);
  return data.message;
};
