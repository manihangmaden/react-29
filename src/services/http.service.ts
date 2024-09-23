import axiosInstance from "../config/axios.config";

interface HeaderConfigProps {
    auth?: boolean,
    file?: boolean
}

abstract class HttpService {

    private headers = {};
    
    private setheaders = (config: HeaderConfigProps) => {
        if(config && config.auth) {
            //TODO: login token
        }
        if(config && config.file){
            this.headers = {
                ...this.headers,
                "Content-Type": "multipart/form-data"
            }
        }
        //TODO: params set
    }

    postRequest = async (url: string, data: any = {}, config: any = null) => {
        try{
          this.setheaders(config);
          const response = await axiosInstance.post(url, data, {
            headers: {...this.headers}
          })
          return response;
        } catch(exception){
             throw exception;
        }
    }

    getRequest = async (url: string, config: any = null) => {
        try{
          this.setheaders(config);
          const response = await axiosInstance.get(url, {
            headers: {...this.headers}
          })
          return response;
        } catch(exception){
             throw exception;
        }
    }
}


export default HttpService;