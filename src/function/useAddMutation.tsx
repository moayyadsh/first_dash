import { useMutation } from 'react-query';
import axios from 'axios';
import { baseURL } from '../config/axios';



function useAddMutation(
  KEY: string ,
  url: string,
) {

 return useMutation( 
  async (dataToSend:any) => {
    const { data } = await axios.post(baseURL+url , dataToSend,{
      headers:{
        "Content-Type":"application/json",
        Authorization:'Bearer '+localStorage.getItem('token')
      }
    });
    return data;
  },)
}

export default useAddMutation;