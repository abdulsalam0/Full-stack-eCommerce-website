const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// custom error handler
const errorHandler = (err, req, res, next) => {
  // checks for status code if not given sets it to 500
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  // sets status code
  res.status(statusCode);

  // sets response json
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { notFound, errorHandler };
