const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()
const checker = require('../middlewares/token')
const jwt = require('jsonwebtoken')

const User = require('../models/userdetails')

router.post('/vendor', checker, async (req, res) => {
    const vendorselect = req.body.vendor;
    let user = await User.findOneAndUpdate({email : req.info.email}, 
    {vendorselected : vendorselect}, 
    {new : true});
    res.json(user);
  
});

router.get('/vendorget', checker, async (req, res) => {
    let user = await User.findOne({email : req.info.email}).exec();
    res.json(user);

});


router.post('/insert',  (req, res) => {
  const name = req.body.name
  const password = req.body.password
  const email = req.body.email
  console.log(email)
  let user =  new User({email, name, password}).save();
  res.json(user);
  console.log(user);

});

router.post('/round1c', checker, async (req, res) => {
  const field1 = req.body.field1;
  const field2 = req.body.field2;
  const field3 = req.body.field3;
  let user = await User.findOneAndUpdate({email : req.info.email}, 
  {
    //round1selections[round1c][field1] : field1,
    //round1selections[round1c][field2] : field2,
    //round1selections[round1c][field3] : field3,
  }, 
  {new : true});
  res.json(user);

});



module.exports = router;
