export class CampaignModel {

}

export class CategoryGroupModel {
    categoryId = "";
    categoryName = "";
    count = 0;
}

export class CampaignGroupCategory {
    success = false;
    data = [CategoryGroupModel];
    message = "";
    pageNum = 1;
    pageSize = 6;

}