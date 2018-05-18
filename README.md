# is-apple

[![NPM Version](https://img.shields.io/npm/v/is-apple.svg)](https://www.npmjs.com/package/is-apple)
[![Build Status](https://travis-ci.org/roccomuso/is-apple.svg?branch=master)](https://travis-ci.org/roccomuso/is-apple)
![node](https://img.shields.io/node/v/is-apple.svg)
[![Dependency Status](https://david-dm.org/roccomuso/is-apple.png)](https://david-dm.org/roccomuso/is-apple)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Verify that a request is from Apple crawlers using Apple's DNS verification steps

You may wish to verify that a web crawler accessing your server is Applebot (or another Apple user-agent) and not spammers or other bots scraping your site while claiming to be Applebot. Since you cannot rely on the `User-Agent` header which is easily spoofed, you need to use DNS look up to verify that the IP address belongs to Apple.


## Install

`npm install --save is-apple`

## Example

```javascript
const isApple = require('is-apple')

let ip = '17.58.98.240'
isApple(ip).then((outcome) => {
  if (outcome) {
    // it's apple.
  }
}).catch(console.error)
```

### Example with express

```javascript
app.enable('trust proxy')

app.use((req, res, next) => {
  let ip = req.ip || req.connection.remoteAddress
  isGoogle(ip).then(outcome => {
    if (outcome) {
      res.status(404).text('Nothing to scan') // block apple crawler
    } else {
      next() // it's a user
    }
  })
})
```

## Tests

`npm test`

## License

MIT

## Author

Rocco Musolino [@roccomuso](https://twitter.com/roccomuso)
