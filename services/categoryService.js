import ServiceRepository from "./serviceRepository.js";
import ErrorHandler from "./errorHandler.js";

const resource = 'category';

export default class CategoryService {
    static getListCategory(pageNum, pageSize, filter) {
        const result = ServiceRepository.getAPI(`${resource}?PageNumber=${pageNum}&PageSize=${pageSize}`);
        return result.then(response => response).catch(err => ErrorHandler.errorHandleRequest(err));
    }
}