import ServiceRepository from "./serviceRepository.js";
import ErrorHandler from "./errorHandler.js";

const resource = 'customerCare';

export default class CustomerCareService {
    static submitContactUs(param) {
        const result = ServiceRepository.postAPI(`${resource}`, param);
        return result.then(response => response).catch(err => ErrorHandler.errorHandleRequest(err));
    }
}