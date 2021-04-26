
const jwt = require('jsonwebtoken')

function check (req, res, next) {
  const token = req.header('token')
  if (!token) {
    return res.status(401).send('Access not granted')
  }
  try {
    const verified = jwt.verify(token, process.env.TOKEN)
    req.info = verified
    next()
  } catch (err) {
    res.status(400).send('token invalid')
  }
}

module.exports = check