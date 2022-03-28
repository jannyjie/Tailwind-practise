import axios from "axios";

const photoRequest = axios.create({
    baseURL: 'https://vue-lessons-api.herkuapp.com/',
});

photoRequest.interceptors.request.use((config) => {
        console.log(config);
        if(config.data === "") throw {error: '資料不得為空'};
        return config;
    }, function (error) {
        return Promise.reject(error);
    }
);

photoRequest.interceptors.response.use((response) => {
        console.log(response);
        return response;
    }, function (error) {
        return Promise.reject(error);
    }
);

export const getPhotoResquest = () => photoRequest.get("/photo/list");
export const postPhotoResquest = () => photoRequest.get("/photo/list", {data: ''});
