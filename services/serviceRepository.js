import { baseUrl, config } from "../config/header";
import axios from "axios";

axios.interceptors.request.use(function (config) {
    // const token = localStorage.getItem('token');
    // config.headers['x-access-token'] = `${token}`;

    return config;
});

class ServiceRepository {
    /**
     * Get repository
     * @param {*} url 
     * @param {*} param 
     * @returns 
     */
    static getAPI(url) {
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(baseUrl + url, config);
                const data = res.data;
                resolve(data);
            } catch (e) {
                reject(e)
            }
        });
    }

    /**
     * Post repository
     * @param {*} url 
     * @param {*} param 
     * @returns 
     */
    static postAPI(url, param) {
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.post(baseUrl + url, param, config);
                const data = res.data;
                resolve(data);
            } catch (e) {
                reject(e)
            }
        });
    }

    /**
     * Put repository
     * @param {*} url 
     * @param {*} param 
     * @returns 
     */
    static putAPI(url, param) {
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.put(baseUrl + url, param, config);
                const data = res.data;
                resolve(data);
            } catch (e) {
                reject(e)
            }
        });
    }

    /**
     * Delete repository
     * @param {*} url 
     * @param {*} param 
     * @returns 
     */
    static deleteAPI(url) {
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.delete(baseUrl + url, config);
                const data = res.data;
                resolve(data);
            } catch (e) {
                reject(e)
            }
        });
    }

    /**
     * Join multi api request repository
     * @param {*} url 
     * @param {*} param 
     * @returns 
     */
    static multiApiUploadCV(param) {
        const urlSubmitForm = axios.post(baseUrl + param.urlSubmitForm, param.payload, config);
        const urlUploadForm = axios.post(baseUrl + param.urlUploadCV, param.payload.file);

        return axios.all([urlSubmitForm, urlUploadForm]).then(axios.spread((...response) => {
            const responseSubmitForm = response[0];
            const responseUpload = response[1];

            return {
                responseSubmitForm: responseSubmitForm,
                responseUpload: responseUpload
            }
        })).catch(error => {
            return error;
        })
    }
}

export default ServiceRepository;