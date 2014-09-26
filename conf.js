var mongoose = require('mongoose');
mongoose.connect('mongodb://OewGz1PuBbBOoFmGoyGvboYH:RgrozL3iZKLIggfhfVteftxlcGsdDp3S@mongo.duapp.com:8908/VJGfidRdhFeCbyPuhKtB', {server: {auto_reconnect:true}});

mongoose.connection.on('close', function(){
    mongoose.connect('mongodb://OewGz1PuBbBOoFmGoyGvboYH:RgrozL3iZKLIggfhfVteftxlcGsdDp3S@mongo.duapp.com:8908/VJGfidRdhFeCbyPuhKtB', {server:{auto_reconnect:true}});
});
mongoose.connection.on('error', function(error){
    console.log('error + ' + error);
    mongoose.disconnect();
});
exports.mongoose = mongoose;

//游记配置
exports.chanyouji = {
    url : "http://chanyouji.com/trips/163350"
}