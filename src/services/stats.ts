import axios from "axios"
import { TGetStats } from "../types/services"

const getStats: TGetStats = async (access_token:string) => {
	const { data } = await axios.get("/api/admin/stats", { headers: { token: access_token }})
	return data
}

export default getStats
