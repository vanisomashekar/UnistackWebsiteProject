var express = require('express');
var router = express.Router();
var University=require('../models/Universities');
const _ = require('lodash');


router.put('/create',function(req,res,next){
univerisitytoDB(req,res);
});

async function univerisitytoDB(req,res){
University.findOne({name:req.body.Name}).exec().then(university=>{if(university){
    console.log(req.body.Name);
    return res.status(409).json({
        message:'University Exists'
    });
}else{
    const university= new University({
    ImagePath:req.body.ImagePath,
    Name:req.body.Name,
    Location:req.body.Location,
    Ranking:req.body.Ranking,
    description:req.body.description,
    acceptance_rate:req.body.acceptance_rate,
    tuition_fee:req.body.tuition_fee,
    averageLiving:req.body.averageLiving,
    averageGRE:req.body.averageGRE,
    Infrastructure:req.body.Infrastructure,
    Residing:req.body.Residing,
    weather:req.body.weather,
    Faculty:req.body.Faculty,
    jobs:req.body.jobs,
    Financial:req.body.Financial,
    verdict:req.body.verdict,
    Longitude:req.body.Longitude,
    Latitude:req.body.Latitude,
    image:req.body.image,
    site:req.body.site
    });
    university.save().then(()=>{
        res.send({'message':'University created successfully'});
    }).catch(err =>{ console.log(err);
        res.status(400).json({
            message:'Invalid values'
        });
    });
}
});
  
}
router.get('/alluni',function(req,res,next){
University.find().exec().then(doc =>{
        if(doc){
        res.send(200,{list:doc});
        }else{
            res.status(401).json({
                message:'User Email does not exist or does not contain products'
            })
        }
    }).catch(err=>{
        console.log(err);
        res.status(500).json({error:err});
    });
}); 
router.get('/search/%22:Name%22',function(req,res,next){
    console.log(req.params.Name)
    University.findOne({Name:req.params.Name}).exec().then(doc =>{
        if(doc){
            res.send(200,{list:doc});
        }else{
            res.status(401).json({
                message:'User Email does not exist '
            })
        }
    }).catch(err=>{
        console.log(err);
        res.status(500).json({error:err});
    }); 
});
router.get('/search/%22:Location%22',function(req,res,next){
    console.log(req.params.Name)
    University.findOne({Location:req.params.Location}).exec().then(doc =>{
        if(doc){
        res.status(200).json(doc);
        }else{
            res.status(401).json({
                message:'Location does not exist'
            })
        }
    }).catch(err=>{
        console.log(err);
        res.status(500).json({error:err});
    }); 
});
module.exports = router;