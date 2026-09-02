import apiService from "../api/apiService"

// api call for add resume, called by steps component
export const addResumeApi = async(reqBody) => {
   return await apiService("POST",`/allResume`,reqBody)
}


