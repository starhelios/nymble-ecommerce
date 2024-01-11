import { useContext } from "react";
import { useMutation } from "@tanstack/react-query"
import toast from 'react-hot-toast';
import { AuthContext } from "../context/AuthContext";
import { ILoginUserPayload } from "../types/services"
import loginApi from "../services/login"

export const useLogin = () => {
	const { updateAuth } = useContext(AuthContext);
	const { mutateAsync, isPending } = useMutation({
		mutationFn: loginApi,
	})

	const loginHandler= async (payload: ILoginUserPayload) => {
		try {
			const response = await mutateAsync(payload)
			updateAuth({ access_token: response })
		} catch (e:any) {
			toast(e.message)
		}
	}

	return { login: loginHandler, isLoginLoading: isPending }
}
