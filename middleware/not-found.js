module.exports = function handle404 (_, res, next) {
  res.status(404)
  res.setHeader('Content-Type', 'text/html')
  res.send('<h1>Page not found</h1>')
  next()
}
