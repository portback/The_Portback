module.exports = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Errror";

  res.statusCode(statusCode).send({
    success: false,
    error: {
      message: message,
    },
  });
};


