/* eslint-disable max-classes-per-file */
class HttpError extends Error {
  constructor({ message, code }) {
    super(message);
    this.name = 'HttpError';
    this.code = code;
  }
}

class DbError extends Error {
  constructor({ message, code }) {
    super(message);
    this.name = 'DbError';
    this.code = code;
  }
}

class CustomError extends Error {
  constructor({ message, code }) {
    super(message);
    this.name = 'CustomError';
    this.code = code;
  }
}

module.exports = {
  HttpError,
  DbError,
  CustomError,
};
