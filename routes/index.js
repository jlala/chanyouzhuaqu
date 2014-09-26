var loadTravel = require('./loadTravel');
var allTravel = require('../update/allTravel');

module.exports = function(app){
    app.get('/',function(req,res){
        loadTravel.getTravel(function(err,doc){
            if(!err && doc){
                res.render('index', {
                    title: doc.title,
                    author:doc.author,
                    time:doc.time,
                    content:doc.content
                });
            }else if(doc == -1){
                console.log("游记不存在！");
            }
        });

    });

//    app.get('/update',function(req,res){
//        allTravel.alltravel(function(err,doc){
//            if(!err && doc){
//                res.render('update', {
//                    title: "ok"
//                });
//            }
//        });
//    });
};

//exports.index = function(req, res){
//  res.render('index', { title: 'Express' });
//};