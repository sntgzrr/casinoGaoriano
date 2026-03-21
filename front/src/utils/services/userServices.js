import axios from "axios";
import { DOMAIN_BACK_NAME } from "../Constants";
import { callRefresh } from "./authServices";

export async function getUsers() {
    try { 
        const response = await axios.get(`${DOMAIN_BACK_NAME}/api/users/`, {
            withCredentials: true
        });
        response.data.map(item => {
            item.date_joined = item.date_joined.substring(0,10);
        })
        return response.data;
    } catch (error) {
         return callRefresh(error, () => getUsers());
    }
}
