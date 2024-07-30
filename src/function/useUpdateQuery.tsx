import { useMutation } from 'react-query';
import axios from 'axios';
import { baseURL } from '../config/axios';



function useUpdateQuery(
  KEY: string ,
  url: string,
  params: Record<string, any> = {},
) {

 return useMutation( 
  async (updatData:any) => {
    const { data } = await axios.post(baseURL+updatData?.id , updatData,{});
    return data;
  },)
}

export default useUpdateQuery;