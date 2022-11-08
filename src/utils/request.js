import axios from "axios";

const request = axios.create({
    baseURL:"https://tiktok.fullstack.edu.vn/api/",
});

export const get = async (api , options = {} ) => {
    const result = await  request.get(api,options);

    return result.data;
}

export default request;