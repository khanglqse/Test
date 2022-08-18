class ErrorHandler {
    static errorHandleRequest(error) {
        if (error?.response?.status === 401) {
            // localStorage.clear();
            // window.location.href = '#/sign-in';
            // return this.$router.push('/sign-in');
        } else {
            return error;
        }
    }
}

export default ErrorHandler;