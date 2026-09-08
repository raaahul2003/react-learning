import apiService from "../api/apiService"

// api call for add resume, called by steps component
export const addResumeApi = async (reqBody) => {
   return await apiService("POST", `/allResume`, reqBody)
}


export const getSingleResumeApi = async (id) => {
   console.log(id);
   return await apiService("GET", `/allResume/${id}`, {})

}

export const downloadResumeApi = async (reqBody) => {
   return await apiService("POST", `/historyResume`, reqBody)
}

export const editResumeApi = async (id, reqBody) => {
   return await apiService("PUT", `/allResume/${id}`, reqBody)
}

export const getHistoryApi = async () => {
   return await apiService("GET", `/historyResume`, {})

}

export const deleteResumeApi = async (id) => {
   return await apiService("DELETE", `/historyResume/${id}`, {})

}