
import { redirect } from "next/navigation";
import axios from 'axios'

export const createAPIURLAndGetData = async (type: any, endPoint: any, payload: any, id: any) => {
    try {
        const response = await type(id === null ? `${endPoint}` : `${endPoint}/${id}`);
        if (response.statusCode === 401) {
            redirect("/");
        }
        return response;
    } catch (err: any) {
        return err.response;
    }
}

export const createAPIURLAndGetDataQryParams = async (type: any, endPoint: any, payload: any, id: any) => {
    try {
        const response = await type(id === null ? `${endPoint}` : `${endPoint}${id}`, payload != null && payload);
        if (response.statusCode === 401) {
            redirect("/");
        }
        return response;
    } catch (err: any) {
        return err.response;
    }
}