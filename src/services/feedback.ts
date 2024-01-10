
import axios from "axios"
import { TGetFeedback } from "../types/services"

const getFeedback: TGetFeedback = async (access_token:string) => {
    const { data } = await axios.get("/api/feedbacks",{ headers: { token: access_token }})
    return data
}

export default getFeedback