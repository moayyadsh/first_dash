import { useQuery } from 'react-query';
import axios from 'axios';
import { baseURL } from '../config/axios';
import { API } from '../api/users';

function useGetQuery(
  KEY: string ,
  url: string,
  params: Record<string, any> = {},
) {

  return useQuery({
    queryKey: [KEY], 
    queryFn: async () => {
      const response = await axios.get( baseURL+ url, { 
        headers:{
          "Content-Type":"application/json",
          Authorization:'Bearer '+localStorage.getItem('token')
        }
       });
      return response?.data ?? [];
    },
  });
}

export default useGetQuery;