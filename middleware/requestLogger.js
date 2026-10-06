const requestLogger = (req, res, next) => {
  const started = Date.now();

  res.on('finish', () => {
    const elapsed = Date.now() - started;
    console.log(`${req.method} ${req.originalUrl} -> ${res.statusCode} (${elapsed}ms)`);
  });

  next();
};

module.exports = requestLogger;
