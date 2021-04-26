const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()
const checker = require('../middlewares/token')
const jwt = require('jsonwebtoken')

const User = require('../models/userdetails')

router.post('/login', (req, res) => {
    User.findOne({ email: req.body.email })
      .then((user) => {
        if (!user) {
          return res.status(400).send('Email or Password Does Not Exist')
        }
        const passcheck = bcrypt.compare(req.body.password, user.password)
        if (!passcheck) {
          return res.status(400).send('Invalid Password or Email')
        }
  

        const token = jwt.sign(
          {
            _id: user._id,
            name: user.name,
            email: user.email
          },
          process.env.SECRET
        )
        res.status(200).json({
          success: true,
          message: 'Authentication Successful!',
          token: token
        })
      })
      .catch((err) => {
        console.log('Error:', err)
      })
  })

module.exports = router;