module.exports = (err, _req, res, _next) =>
  res.status(err.status || 500).json({
    message: err.message || 'Unexpected error, please try again later',
  });
