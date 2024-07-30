
import { baseURL, userskey, } from "../config/axios";
import useAuthQuery from "../function/useAddMutation";
import useDeleteQuery from "../function/useDeleteQuery";
import useGetQuery from "../function/useGetQuery";
import useUpdateQuery from "../function/useUpdateQuery";



export const API = {
    GET: "/teacher",
    ADD: "/teacher",
    UPDATE: "/teacher/",
    DELETE: "/teacher/",

  };


export const useGetUsers = (param?:any) => useGetQuery(userskey ,  API.GET ,param);
export const useDeleteUsers=(param?:any) => useDeleteQuery(userskey ,API.DELETE, param)
export const useUpdateUsers=(param?:any) => useUpdateQuery(userskey ,baseURL+API.UPDATE, param)

