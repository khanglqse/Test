import MessageConstant from "@/constant/message-constant";

class ErrorHandler {
    static errorHandleRequest(error) {
        // if (error?.response?.status === 401) {
        //     // localStorage.clear();
        //     // window.location.href = '#/sign-in';
        //     // return this.$router.push('/sign-in');
        // } else {
        //     return error;
        // }
        return {
            status: error?.status || 500,
            errorMessage: error || MessageConstant.INVALID_REQUEST,
            isError: true
        };
    }
}

export default ErrorHandler;