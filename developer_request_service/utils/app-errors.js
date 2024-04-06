class CustomError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.message = message;
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = CustomError;
