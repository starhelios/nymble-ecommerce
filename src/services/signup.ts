import axios from "axios"
import { TSignupUser } from "../types/services"

const signupApi: TSignupUser = async (payload) => {
	const { data } = await axios.post("/api/users/signup", payload)
	return data
}

export default signupApi
