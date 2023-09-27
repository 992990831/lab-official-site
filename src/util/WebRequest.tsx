import axios from "axios";

const webRequest = axios.create();

//请求拦截器
webRequest.interceptors.request.use(
    (config) => {


        return Promise.resolve(config);
    },
    (err) => {
        return Promise.reject(err);
    }
);

// 响应拦截器
webRequest.interceptors.response.use(
    (response) => {
        const { data, status, statusText } = response;
        if (status === 200) {
          return Promise.resolve(data);
        } else {
          return Promise.reject(response);
        }
    },
    (error) => {
      return Promise.reject(error);
    }
  );

export default webRequest;