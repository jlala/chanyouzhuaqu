var Travel = require('../models/travel').Travel;
var async = require('async');

//读取游记内容
exports.getTravel = function(callback){
    Travel.findOne({},function(err,doc){
        if(!err && doc){
            callback(null,doc);
        }else{
            var code = -1;
            callback(null,code);
        }
    });
};