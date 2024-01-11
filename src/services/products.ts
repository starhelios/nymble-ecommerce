import axios from "axios"
import { TGetTopSellingProduct } from "../types/services"

export const getTopSellingProduct: TGetTopSellingProduct = async (access_token: string) => {
	const { data } = await axios.get("/api/products/top-selling", { headers: { token: access_token }})
	return data
}

export default getTopSellingProduct
