import ServiceRepository from "./serviceRepository.js";
import ErrorHandler from "./errorHandler.js";

const resource = 'candidate';

export default class CandidateService {
    static submitCandidateService(param) {
        const result = ServiceRepository.postAPI(`${resource}`, param);
        return result.then(response => response).catch(err => ErrorHandler.errorHandleRequest(err));
    }
}