var mongoose = require('mongoose');
var Schema =mongoose.Schema;
const jwt =require('jsonwebtoken');
var bcrypt = require('bcrypt');

var checklistSchema = new Schema({
    Universityname:{type:String,require:true},
    Status:{type:String,require:true},
    Comments:{type:String}
});

var schema = new Schema({
    email:{type:String,require:true},
    password:{type:String,require:true},
    creation_date:{type:Date,require:true},
    Name:{type:String,require:true},
    PhoneCode:{type:Number},
    Phone:{type:Number},
    BirthMonth:{type:String},
    BirthDate:{type:Number},
    BirthYear:{type:Number},
    Address:{type:String},
    City:{type:String},
    zipcode:{type:String},
    GRE:{type:Number},
    englishgrade:{type:Number},
    UGpercent:{type:Number},
    WorkExperience:{type:Number},
    Checklists:[checklistSchema]
});

schema.statics.hashPassword =function hashPassword(password){
    return bcrypt.hashSync(password,10);
}

schema.methods.isValid = function(hashedpassword){
    return bcrypt.compareSync(hashedpassword, this.password);
}
schema.methods.generateJwt = function(){
    return jwt.sign({_id:this._id},
        'SECRET#123',
        {
            expiresIn:"10m"
        }); 
}

module.exports = mongoose.model('User',schema);