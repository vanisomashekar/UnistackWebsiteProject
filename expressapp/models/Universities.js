var mongoose = require('mongoose');

const universitySchema = mongoose.Schema({
    ImagePath:{type:String,required:true},
    Name:{type:String,required:true},
    Location:{type:String,required:true},
    Ranking:{type:Number,required:true},
    description:{type:String,required:true},
    acceptance_rate:{type:Number,required:true},
    tuition_fee:{type:Number,required:true},
    averageLiving:{type:Number,required:true},
    averageGRE:{type:Number,required:true},
    Infrastructure:{type:String,required:true},
    Residing:{type:String,required:true},
    weather:{type:String,required:true},
    Faculty:{type:String,required:true},
    jobs:{type:String,required:true},
    Financial:{type:String,required:true},
    verdict:{type:String,required:true},
    Longitude:{type:String,required:true},
    Latitude:{type:String,required:true},
    image:{type:String,required:true},
    site:{type:String,required:true}
});

module.exports=mongoose.model('Universities',universitySchema);