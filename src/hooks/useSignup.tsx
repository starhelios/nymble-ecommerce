import { useContext } from "react";
import { useMutation } from "@tanstack/react-query"
import toast from 'react-hot-toast';
import { AuthContext } from "../context/AuthContext";
import { ISignupUserPayload } from "../types/services"
import signupApi from "../services/signup";

export const useSignup = () => {
	const { updateAuth } = useContext(AuthContext);
	const { mutateAsync, isPending } = useMutation({
		mutationFn: signupApi,
	})

	const signupHandler = async (payload: ISignupUserPayload) => {
		try {
			const response = await mutateAsync(payload)
			updateAuth({ access_token: response })
		} catch (e: any) {
			toast(e.message)
		}
	}

	return { signup: signupHandler, isSignupLoading: isPending }
}
