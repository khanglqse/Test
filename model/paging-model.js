export class PagingModel {
    items = [ItemModel];
    pageIndex = 1;
    totalPage = 0;
    totalCount = 0;
    hasPreviousPage = false;
    hasNextPage = false;
    pageNum = 1;
    pageSize = 4;
    keyword = "";
    rating = 0;
}

class ItemModel {
    id = "";
    title = "";
    type = "";
    categoryId = "";
    categoryName = "string";
    description = "";
    location = "";
    companyId = "";
    companyName = "";
    budgetFrom = 0;
    budgetTo = 0;
    commission = 0;
    startDate = new Date();
    endDate = new Date();
    duration = 0;
    convertType = "";
    rating = 0;
    note = "";
    imageUrl = "string";
    status = ""
}