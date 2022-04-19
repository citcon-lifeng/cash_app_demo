const fetch = require('node-fetch');
const uuid = require("uuid").v4;
const { CustomError } = require('../error/error');
const { ERROR_CODE } = require('../error/error_code');

const parseApiResult = async (result) => {
  console.log(result);
  if (result.errors) {
    const message = result.errors[0].detail;
    throw new CustomError({
      message,
      code: ERROR_CODE.PAYMENT_NETWORK_ERROR,
    });
  }
  return result;
};

const cashAppService = {
  retrieveRequest: async (requestID) => {
    const url = 'https://sandbox.api.cash.app/customer-request/v1/requests/'+requestID;
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'X-Region': 'PDX',
        'Content-Type': 'application/json',
        Authorization: 'Client CAS-CI_CITCON'
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return await parseApiResult(data);
  },

  createPayment: async ({
    amount,
    grant_id,
    reference_id,
  }) => {
    try {
      const url = 'https://sandbox.api.cash.app/network/v1/payments';
      const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'X-Region': 'PDX',
          'Content-Type': 'application/json',
          Authorization: 'Client CAS-CI_CITCON CASH_t0630q1ekwxajtjjdq2rwghs9'
        },
        body: JSON.stringify({
          payment: {
            capture: true,
            amount,
            currency: "USD",
            merchant_id: 'MMI_9m0w95bc3b1s6tof5g19dpvn5',
            grant_id,
            reference_id,
          },
          idempotency_key: uuid(),
        })
      };
      const response = await fetch(url, options);
      const data = await response.json();
      return await parseApiResult(data);
    } catch (error) {
      throw error;
    }

  }
};
module.exports = cashAppService;

