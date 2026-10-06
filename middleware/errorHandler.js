const errorHandler = (err, req, res, next) => {
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({
      success: false,
      message: 'Request body contains invalid JSON'
    });
  }

  const status = err.statusCode || 500;
  const message = status === 500 ? 'Something went wrong on the server' : err.message;

  console.error(err.message);

  res.status(status).json({
    success: false,
    message
  });
};

module.exports = errorHandler;
