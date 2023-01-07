let _handler
exports.handler = function handler (event, context) {
  if (_handler) {
    return _handler(event, context)
  }
  return import('./server.mjs').then(m => {
    _handler = m.handler
    return _handler(event, context)
  })
}