var Travel = require('../models/travel').Travel;
var async = require('async');
//保存游记内容

exports.saveTravel = function (title,author,time,content,callback){
   var travel = new Travel();
   travel.title = title;
   travel.author = author;
   travel.time = time;
   travel.content = content;
   travel.save(function(err){
       if(err){
           console.log(err);
       }else{
           callback(null,{travel:travel});
       }
   });
};