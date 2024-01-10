
import axios from "axios"
import { TGetInventories, TGetStats, TSignupUser } from "../types/services"

const getInventories: TGetInventories = async (access_token:string) => {
    const { data } = await axios.get("/api/inventories",{ headers: { token: access_token }})
    return data
}

export default getInventories