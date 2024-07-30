import useAddMutation from "../function/useAddMutation";
import useAuthQuery from "../function/useAddMutation";


export const API = {
    LOGIN: "/login",

  };

  
const userskey = "auth"
export const useLogin=() => useAddMutation(userskey ,API.LOGIN)
