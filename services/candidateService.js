import ServiceRepository from "./serviceRepository.js";
import ErrorHandler from "./errorHandler.js";

const resource = 'candidate';

export default class CandidateService {
    static submitCandidate(param) {
        const result = ServiceRepository.postAPI(`${resource}`, param);
        return result.then(response => response).catch(err => ErrorHandler.errorHandleRequest(err));
    }

    static uploadCVCandidate(request) {
        const param = {
            urlSubmitForm: resource,
            urlUploadCV: `attachment?recordId=${request.recordId}&type=${request.type}`,
            payload: request,
        };

        console.log(param);

        const result = ServiceRepository.multiApiUploadCV(param);
        return result.then(response => response).catch(err => ErrorHandler.errorHandleRequest(err));
    }
}