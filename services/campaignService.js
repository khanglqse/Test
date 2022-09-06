import ServiceRepository from "./serviceRepository.js";
import ErrorHandler from "./errorHandler.js";

const resource = 'campaign';

export default class CampaignService {
    static getListCampaign(param) {
        const result = ServiceRepository.getAPI(`${resource}?PageNumber=${param.pageIndex}&PageSize=${param.pageSize || 4}&Keyword=${param.keyword || ""}&SalaryFrom=${param.budget?.from}&SalaryTo=${param.budget?.to}`);
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