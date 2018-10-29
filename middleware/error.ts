interface ServerError extends Error {
  status: number;
}

module.exports = function handleError(error: ServerError, _: any, res: any, next: () => void) {
  res.render('500', {
    status: error.status || 500,
    error,
  });
  next();
};
