
import axios from "axios"
import { TGetProductSales } from "../types/services"

const getProductSales: TGetProductSales = async (access_token:string,product_id:string) => {
    const { data } = await axios.get(`/api/products/product-sales/?product_id=${product_id}`,{ headers: { token: access_token }})
    return data
}

export default getProductSales