import moment from "moment";
export class CandidateModel {
    name = "";
    gender = "";
    email = "";
    phone = "";
    birthday = moment(new Date()).format("YYYY-MM-DD");
    isMale = true;
    isForm = 1;
    isSubmit = 0;
    file = [];
    recordId = "";
    type = "candidate";
}