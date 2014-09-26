//var mongoose = require('mongoose');
var config = require('../conf').mongoose;

//var db = exports.Db = mongoose.createConnection();
//var options = {
//    db: { native_parser: true },
//    server: { poolSize: 5 },
//    user: '',
//    pass: ''
//}
//var isDev = false;
//var host = isDev ? 'localhost' : 'mongo.duapp.com';
//var port = isDev ? '27017' : '8908';
//var database = isDev ? 'foo' : 'VJGfidRdhFeCbyPuhKtB';
//var user = isDev ? 'foo' : 'OewGz1PuBbBOoFmGoyGvboYH';
//var pass = isDev ? 'bar' : 'RgrozL3iZKLIggfhfVteftxlcGsdDp3S';
//db.open(host, database, port, options);
//db.on('error', function (err) {
//    //logger.error("connect error :" + err);
//    //监听BAE mongodb异常后关闭闲置连接
//    db.close();
//});
////监听db close event并重新连接
//db.on('close', function () {
//    //logger.info("connect close retry connect ");
//    db.open(host, database, port, options);
//});
//var db = mongoose.connect('mongodb://');//mongodb://localhost/houcheshidb
var Schema = config.Schema;

var connectSchema = new Schema({
    sid:Number,
    id:String,
    src : String,
    caption : String,
    shoot : String
});

var travelSchema = new Schema({
    id: Number,
    title:String,
    author:String,
    time:Date,
    content:[connectSchema]
});
exports.Travel = config.model("Travel",travelSchema);