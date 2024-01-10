
import axios from "axios"
import { TGetOrderItems, TGetOrders } from "../types/services"

const getOrderItems: TGetOrderItems = async (access_token:string) => {
    const { data } = await axios.get("/api/orders/order-item",{ headers: { token: access_token }})
    return data
}

export default getOrderItems