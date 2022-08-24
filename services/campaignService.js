import ServiceRepository from "./serviceRepository.js";
import ErrorHandler from "./errorHandler.js";

const resource = 'campaign';

export default class CampaignService {
    static getListCampaign(pageNum, pageSize, filter) {
        const result = ServiceRepository.getAPI(`${resource}?PageNumber=${pageNum}&PageSize=${pageSize}`);
        return result.then(response => response).catch(err => ErrorHandler.errorHandleRequest(err));
    }
}