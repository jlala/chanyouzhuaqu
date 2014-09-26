var request = require('request');
var cheerio = require('cheerio');

//请求指定的url
function requestLoad (url,callback){
    request(url,callback);
}

//读取游记内容

exports.travelDetail = function (url,callback){
    requestLoad(url,function(err,res){
       if(err) return callback(err);

       //创建DOM对象
       var $ = cheerio.load(res.body.toString());
       //获取游记信息
       var title = $('.cover-header h1 span').text().trim();
       var author = $('.cover-header .trip-info a').text().trim();
       var timetext = $('.cover-header .trip-info time').text().trim().split(' ');
       var time = timetext[0];

       var content = [];

       var script = $('#js-trip').find('script')[2].children[0].data;
       var imgdoc = script.split(';')[2];
       var imgjson = imgdoc.substring(50,imgdoc.length-28);
       var jsontext = eval("(" + imgjson + ")");

       $(jsontext).each(function(index){
           var val = jsontext[index];

           if(typeof val.photo !="undefined"){
               var imgsrc = val.photo;
               var item = {
                   sid : val.sid,
                   id : val.id,
                   src : imgsrc.src,
                   caption : val.description,
                   shoot : val.datetime
               }
               content.push(item);
           }
       });

       callback(null,{title:title,author:author,time:time,content:content});

    });
};