const { ERROR_CODE, STATUS, HTTP_STATUS } = require('../error/error_code');
const { CustomError } = require('../error/error');

const responseHelper = (res) => {
  const base = (status, data = null) => {
    const obj = { status };
    if (data) {
      obj.data = data;
    }
    return obj;
  };

  return {

    status: () => res.status(HTTP_STATUS.OK).json(base(STATUS.SUCCESS)),

    success: (data) => res.status(HTTP_STATUS.OK).json(base(STATUS.SUCCESS, data)),

    fail: (err) => {
      let error = err;
      if (!(error instanceof Error)) {
        error = new CustomError({ message: 'not error instance', code: ERROR_CODE.UNKNOWN_ERROR });
      }


      if (!error.code) error.code = ERROR_CODE.UNKNOWN_ERROR;

      const {
        code = ERROR_CODE.UNKNOWN_ERROR.code,
        message = ERROR_CODE.UNKNOWN_ERROR.message,
        http_status = ERROR_CODE.UNKNOWN_ERROR.http_status,
      } = error.code;

      // let debug;
      // if (env.logLevel === 'debug') {
      //     debug = error.message;
      // }

      return res.status(http_status).json(base(STATUS.FAIL, {
        code,
        message,
        // debug
      }));
    },
  };
};

module.exports = responseHelper;
