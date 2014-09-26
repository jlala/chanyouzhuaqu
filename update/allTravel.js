var async = require('async');
var read = require('./readTravel');
var save = require('./saveTravel');
var chanyouji = require('../conf').chanyouji;

    //读取游记并保存游记
exports.alltravel = function(callback){
    read.travelDetail(chanyouji.url,function(err,doc){
        if(err) return err;
        if(doc){
            save.saveTravel(doc.title,doc.author,doc.time,doc.content,function(err){
                if(err) return err;
                callback(null,{travel:doc});
            });
        }
    });
};

