class ApiError extends Error {
    status;
    errors;

    constructor(status, message, errors = []) {
        super(message);
        this.status = status
        this.errors = errors
    }

    static unauthorized(message) {
        return new ApiError(401, message || 'Unauthorized')
    }

}

export default ApiError