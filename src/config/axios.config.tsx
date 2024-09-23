import axios from "axios"


const axiosInstance = axios.create({
    //process.env.REACT_APP_URL for CRA template
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 30000,
    timeoutErrorMessage: "Server timed out...",
    //method: "get,post, put, patch, delete",
    //maxContentLength
    //maxRate
    //xsrCookieName
    headers: {
        "Content-Type": "application/json"
    }
})


//Interceptor

axiosInstance.interceptors.response.use((response: any) => {
    return response.data;
}, (error: any) => {
    if(error.code === "ERR_BAD_REQUEST"){
        throw error.response;
    } else{
        //TODO: manipulation
    }
})


export default axiosInstance;
