const STATUS_CODES = {};

STATUS_CODES.ACCEPTED = 202;
STATUS_CODES.BAD_GATEWAY = 502;
STATUS_CODES.BAD_REQUEST = 400;
STATUS_CODES.CONFLICT = 409;
STATUS_CODES.CONTINUE = 100;
STATUS_CODES.CREATED = 201;
STATUS_CODES.EXPECTATION_FAILED = 417;
STATUS_CODES.FAILED_DEPENDENCY  = 424;
STATUS_CODES.FORBIDDEN = 403;
STATUS_CODES.GATEWAY_TIMEOUT = 504;
STATUS_CODES.GONE = 410;
STATUS_CODES.HTTP_VERSION_NOT_SUPPORTED = 505;
STATUS_CODES.IM_A_TEAPOT = 418;
STATUS_CODES.INSUFFICIENT_SPACE_ON_RESOURCE = 419;
STATUS_CODES.INSUFFICIENT_STORAGE = 507;
STATUS_CODES.INTERNAL_SERVER_ERROR = 500;
STATUS_CODES.LENGTH_REQUIRED = 411;
STATUS_CODES.LOCKED = 423;
STATUS_CODES.METHOD_FAILURE = 420;
STATUS_CODES.METHOD_NOT_ALLOWED = 405;
STATUS_CODES.MOVED_PERMANENTLY = 301;
STATUS_CODES.MOVED_TEMPORARILY = 302;
STATUS_CODES.MULTI_STATUS = 207;
STATUS_CODES.MULTIPLE_CHOICES = 300;
STATUS_CODES.NETWORK_AUTHENTICATION_REQUIRED = 511;
STATUS_CODES.NO_CONTENT = 204;
STATUS_CODES.NON_AUTHORITATIVE_INFORMATION = 203;
STATUS_CODES.NOT_ACCEPTABLE = 406;
STATUS_CODES.NOT_FOUND = 404;
STATUS_CODES.NOT_IMPLEMENTED = 501;
STATUS_CODES.NOT_MODIFIED = 304;
STATUS_CODES.OK = 200;
STATUS_CODES.PARTIAL_CONTENT = 206;
STATUS_CODES.PAYMENT_REQUIRED = 402;
STATUS_CODES.PERMANENT_REDIRECT = 308;
STATUS_CODES.PRECONDITION_FAILED = 412;
STATUS_CODES.PRECONDITION_REQUIRED = 428;
STATUS_CODES.PROCESSING = 102;
STATUS_CODES.PROXY_AUTHENTICATION_REQUIRED = 407;
STATUS_CODES.REQUEST_HEADER_FIELDS_TOO_LARGE = 431;
STATUS_CODES.REQUEST_TIMEOUT = 408;
STATUS_CODES.REQUEST_TOO_LONG = 413;
STATUS_CODES.REQUEST_URI_TOO_LONG = 414;
STATUS_CODES.REQUESTED_RANGE_NOT_SATISFIABLE = 416;
STATUS_CODES.RESET_CONTENT = 205;
STATUS_CODES.SEE_OTHER = 303;
STATUS_CODES.SERVICE_UNAVAILABLE = 503;
STATUS_CODES.SWITCHING_PROTOCOLS = 101;
STATUS_CODES.TEMPORARY_REDIRECT = 307;
STATUS_CODES.TOO_MANY_REQUESTS = 429;
STATUS_CODES.UNAUTHORIZED = 401;
STATUS_CODES.UNPROCESSABLE_ENTITY = 422;
STATUS_CODES.UNSUPPORTED_MEDIA_TYPE = 415;
STATUS_CODES.USE_PROXY = 305;

const httpCodes = new Proxy({ OK: "200", INTERNAL_SERVER_ERROR: 500 }, {
    get: function(target, property) {
        if (property in target) {
            return target[property];
        } else {
            throw new Error("HTTP Code doesn't exist");
        }
    }
});

module.exports = httpCodes;