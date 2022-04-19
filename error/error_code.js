const STATUS = {
  SUCCESS: 'success',
  FAIL: 'fail',
};

const HTTP_STATUS = {
  OK: 200,
  ACCEPTED: 202,
  REDIRECT: 303,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  NOT_ACCEPTABLE: 406,
  REQUEST_TIMEOUT: 408,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500,
  GATEWAY_TIMEOUT: 508,
};

const ERROR_CODE = Object.freeze({
  SUCCESS: {
    code: '2000',
    message: 'success',
    http_status: HTTP_STATUS.OK,
  },
  BAD_REQUEST: {
    code: '4000',
    message: 'bad request',
    http_status: HTTP_STATUS.BAD_REQUEST,
  },
  UNAUTHORIZED: {
    code: '4010',
    message: 'unauthorized',
    http_status: HTTP_STATUS.UNAUTHORIZED,
  },
  DUPLICATE_REQUEST: {
    code: '4100',
    message: 'duplicate request',
    http_status: HTTP_STATUS.BAD_REQUEST,
  },
  UNKNOWN_ERROR: {
    code: '4101',
    message: 'unknown error',
    http_status: HTTP_STATUS.INTERNAL_SERVER_ERROR,
  },
  INVALID_HEADER: {
    code: '4102',
    message: 'invalid header',
    http_status: HTTP_STATUS.BAD_REQUEST,
  },
  NOT_FOUND: {
    code: '4103',
    message: 'not found',
    http_status: HTTP_STATUS.NOT_FOUND,
  },
  GATEWAY_TIMEOUT: {
    code: '4105',
    message: 'gateway timeout',
    http_status: HTTP_STATUS.GATEWAY_TIMEOUT,
  },
  GATEWAY_UNAVAILABLE: {
    code: '4106',
    message: 'gateway unavailable',
    http_status: HTTP_STATUS.GATEWAY_TIMEOUT,
  },
  GATEWAY_ERROR: {
    code: '4107',
    message: 'gateway error',
    http_status: HTTP_STATUS.GATEWAY_TIMEOUT,
  },
  INTERNAL_SERVER_ERROR: {
    code: '5100',
    message: 'internal server error',
    http_status: HTTP_STATUS.INTERNAL_SERVER_ERROR,
  },
  PAYMENT_NETWORK_ERROR: {
    code: 'alipay_err_000',
    message: 'payment network error',
    http_status: HTTP_STATUS.GATEWAY_TIMEOUT,
  },
  GATEWAY_NOT_SUPPORT: {
    code: '5200',
    message: 'gateway not support',
    http_status: HTTP_STATUS.INTERNAL_SERVER_ERROR,
  },
});

module.exports = {
  ERROR_CODE,
  STATUS,
  HTTP_STATUS,
};
