const dns = require('dns')

function isApple (ip) {
  return new Promise((resolve, reject) => {
    dns.reverse(ip, (err, domains) => {
      if (err) {
        return reject(err)
      }
      const hostname = domains[0]
      if (!(hostname.endsWith('.applebot.apple.com'))) {
        return resolve(false)
      }

      dns.lookup(domains[0], (err, addr) => {
        if (err) {
          return reject(err)
        }
        const outcome = addr === ip
        return resolve(outcome)
      })
    })
  })
}

module.exports = isApple
