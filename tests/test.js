const test = require('tape')
const isApple = require('../')

test('should fail on wrong IPs', (t) => {
  t.plan(2)
  isApple('1.1.1.1').then(outcome => t.notOk(outcome))
  isApple('123.123.123.123').catch(err => t.equal(err.code, 'ENOTFOUND'))
})

test('should fail with wrong inputs', (t) => {
  t.plan(3)
  isApple('helloworld').catch(err => t.ok(err))
  isApple('0.0.0.0.0.0').catch(err => t.ok(err))
  isApple().catch(err => t.ok(err))
})

test('should pass on valid applebot.apple.com crawler ip', (t) => {
  t.plan(1)
  isApple('17.58.98.240').then(outcome => t.ok(outcome))
})
