var express = require('express');
var router = express.Router();
var User = require('../models/user');
var passport = require('passport');
const jwtHelper = require('../jwthelper');
const _ = require('lodash');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

router.post('/register', function (req, res, next) {
  addtoDB(req, res);
});



async function addtoDB(req, res) {
  User.findOne({ email: req.body.email }).exec().then(user => {
    if (user) {
      return res.status(409).json({
        message: 'mail exists'
      });
    } else {
      const user = new User({
        email: req.body.email,
        password: User.hashPassword(req.body.password),
        creation_date: Date.now()
      });
      user.save().
        then(() => {
          res.send({ 'message': 'User created successfully' });
        }).catch(err => {
          console.log(err);
          res.status(400).json({
            message: 'Invalid values'
          });
        });
    }
  });

}
router.put('/update/:email', function (req, res, next) {
  User.findOne({ email: req.params.email }).exec().then(user => {
    if (user) {
      var items = {
        Name: req.body.name,
        PhoneCode: req.body.phonecode,
        Phone: req.body.phonenumber,
        BirthYear: req.body.birthYear,
        BirthMonth: req.body.birthMonth,
        BirthDate: req.body.birthDate,
        Address: req.body.address,
        City: req.body.City,
        zipcode: req.body.zipcode,
        GRE: req.body.GRE,
        englishgrade: req.body.englishgrade,
        WorkExperience: req.body.WorkExperience
      }
      const _email = req.params.email;
      User.updateOne({ email: _email }, { $set: items }).exec().then(result => {
        console.log(result);
        res.status(204).json({
          message: 'Sucessfully Registered'
        });
      }).catch(err => {
        console.log(err);
        res.status(400).json({
          message: 'Invalid values'
        })
      });
    } else {
      return res.status(401).json({
        message: 'user does not exist'
      })
    }
  });
});
router.put('/checklist/:email', function (req, res, next) {
  User.findOne({ email: req.params.email }).exec().then(user => {
    if (user) {
      const _email = req.params.email;
      var itemlist = {
        Universityname: req.body.Universityname,
        Status: req.body.Status,
        Comments: req.body.Comments
      }
      User.updateOne({ email: _email }, { $push: { Checklists: itemlist } }).exec().then(
        result => {
          console.log(result);
          res.status(204).json({
            message: 'Sucessfully Registered'
          });
        }).catch(err => {
          console.log(err);
          res.status(400).json({
            message: 'Invalid values'
          })
        });
    }
  });
});

router.put('/checklist/:email/:id', function (req, res, next) {
  User.findOne({ email: req.params.email }).exec().then(user => {
    if (user) {
      const _email = req.params.email;
      const _id = req.params.id;
      User.updateOne({ email: _email, "Checklists._id": _id },
        { $set: { "Checklists.$.Universityname": req.body.Universityname, "Checklists.$.Status": req.body.Status, "Checklists.$.Comments": req.body.Comments } }).exec().then(
          result => {
            console.log(result);
            res.status(204).json({
              message: 'Sucessfully Registered'
            });
          }).catch(err => {
            console.log(err);
            res.status(400).json({
              message: 'Invalid values'
            })
          });
    }
  });
});

router.delete('/checklist/:email/:id',function(req,res,next){
  User.findOne({ email: req.params.email }).exec().then(user => {
  if (user) {
    const _email = req.params.email;
    const _id = req.params.id;
    User.updateOne({email: _email},{$pull :{"Checklists":{"_id":_id}}},{ safe: true, multi:true }).then(user => {
      res.send({'message':'user deleted successfully'});
  });
}
  });
});
router.post('/login', function (req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    if (err) { return res.status(501).json(err); }
    if (!user) { return res.status(501).json(info); }
    req.logIn(user, function (err) {
      if (err) { return res.status(502).json(err); }
      return res.status(200).json({
        token: user.generateJwt(),
        message: 'Login Success'
      });
    });
  })(req, res, next);
});

router.get('/user/:email', function (req, res, next) {
  User.findOne({ email: req.params.email },
    (err, user) => {
      if (!user)
        return res.status(404).json({ status: false, message: "user record not found" });
      else
        return res.status(200).json({ status: true, user: _.pick(user, ['email', 'Address', 'BirthDate', 'BirthMonth', 'BirthYear', 'City', 'Name', 'Phone', 'PhoneCode', 'zipcode', 'GRE', 'englishgrade', 'WorkExperience', 'Checklists']) });
    })
});
router.get('/userProfile', jwtHelper.verifyJwtToken, function (req, res, next) {
  User.findOne({ _id: req._id },
    (err, user) => {
      if (!user)
        return res.status(404).json({ status: false, message: "user record not found" });
      else
        return res.status(200).json({ status: true, user: _.pick(user, ['email', 'Address', 'BirthDate', 'BirthMonth', 'BirthYear', 'City', 'Name', 'Phone', 'PhoneCode', 'zipcode', 'GRE', 'englishgrade', 'WorkExperience', 'Checklists']) });
    })
});



module.exports = router;
