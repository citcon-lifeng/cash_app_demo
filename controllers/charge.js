const cashAppService = require('../services/cashapp_service');
const responseHelper = require('../utils/response_helper');

const charge = {
  create: async (req, res, next) => {
    try {
      let data = {};
      if (req.body.cashRequestID) {
        const retrieveRes = await cashAppService.retrieveRequest(req.body.cashRequestID);
         data = {
          amount: retrieveRes.request.actions[0].amount,
          grant_id: retrieveRes.request.grants[0].id,
          reference_id: retrieveRes.request.reference_id
        };
      } else {
        data = {
          amount: req.body.amount,
          grant_id: req.body.grantId,
          reference_id: req.body.referenceId
        };
      }
      const result = await cashAppService.createPayment(data);
      return responseHelper(res).success(result);
    } catch (e) {
      return next(e);
    }
  }

};
module.exports = charge;

