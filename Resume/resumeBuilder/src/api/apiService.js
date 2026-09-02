import axiosInstance from "./axiosInstance";

const apiService = async (httpMethod, url, reqBody) => {
    const reqConfig = {
        method: httpMethod,
        url,
        data: reqBody

    }
    try {
        const responce = await axiosInstance(reqConfig)
        return responce
    }
    catch (err) {
        throw err
    }
}

export default apiService
