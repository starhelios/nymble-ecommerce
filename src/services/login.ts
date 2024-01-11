import axios from "axios"
import { TLoginUser } from "../types/services"

const loginApi: TLoginUser = async (payload) => {
	const { data } = await axios.post("/api/users/login", payload)
	return data
}

export default loginApi
