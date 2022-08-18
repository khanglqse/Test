import ServiceRepository from "./serviceRepository.js";
import ErrorHandler from "./errorHandler.js";

const resource = 'campaign/';

export default class CampaignService {
    static getListCampaign() {
        const result = ServiceRepository.getAPI(resource + 'getListCampain');
        return result.then(response => response).catch(err => ErrorHandler.errorHandleRequest(err));
    }
}