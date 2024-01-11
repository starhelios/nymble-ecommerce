import axios from "axios"
import { TGetOrders } from "../types/services"

const getOrders: TGetOrders = async (access_token: string) => {
	const { data } = await axios.get("/api/orders", { headers: { token: access_token }})
	return data
}

export default getOrders
