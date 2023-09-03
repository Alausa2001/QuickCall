const logger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.originalUrl)
    console.log('Headers:  ', {
      Authorization: request.headers.authorization,
      'Content-Type': request.headers['content-type']
    });
    console.log('Body:  ', request.body)
    console.log('---')
    next()
  }

  module.exports = logger;