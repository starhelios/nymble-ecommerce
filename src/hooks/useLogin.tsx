import { useMutation, useQuery } from "@tanstack/react-query"
import loginApi from "../services/login"
import { ILoginUserPayload } from "../types/services"
import toast from 'react-hot-toast';
import { AxiosError } from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useLogin = () => {
    const { updateAuth } = useContext(AuthContext);
    const { mutateAsync, isPending } = useMutation({
        mutationFn: loginApi,
    })
    const loginHandler= async (payload:ILoginUserPayload)=>{
        try{
            const response = await mutateAsync(payload)
            updateAuth({
                access_token:response
            })
        }catch(e:any){
            toast(e.message)
        }
    }

    return { login: loginHandler, isLoginLoading: isPending }
}
