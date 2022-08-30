import ServiceRepository from "./serviceRepository.js";
import ErrorHandler from "./errorHandler.js";

const resource = 'campaign';

export default class CampaignService {
    static getListCampaign(pageNum, pageSize, keyword) {
        const result = ServiceRepository.getAPI(`${resource}?PageNumber=${pageNum}&PageSize=${pageSize}&Keyword=${keyword ?? ""}`);
        return result.then(response => response).catch(err => ErrorHandler.errorHandleRequest(err));
    }

    static getGroupCategory(pageNum, pageSize) {
        const result = ServiceRepository.getAPI(`${resource}/group-category?PageNumber=${pageNum}&PageSize=${pageSize}`);
        return result.then(response => response).catch(err => ErrorHandler.errorHandleRequest(err));
    }

    static getDetailCampaign(campaignId) {
        const result = ServiceRepository.getAPI(`${resource}/${campaignId}`);
        return result.then(response => response).catch(err => ErrorHandler.errorHandleRequest(err));
    }
}