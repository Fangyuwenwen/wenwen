const app = require('express')();
//與java的import一樣，匯入Express套件，並馬上呼叫建構子，因此app變數已存放Express物件，可進行各種操作
app.get('/', function(req,res){
 //指定app要聆聽的路徑，'/'為根目錄，在這匿名函數裡,req是request(請求)，res是response(回應)
    res.send('<h1>HELLO WORLD！</h1>');
//若使用者進入此路徑，回傳以下的response，透過res物件傳送回應
});
app.listen(8080, function(){
    //把app佈置在8080port上
    console.log('YES 8080PORT');
     //在主控台(cmd)列印訊息
});
//本範例的網址是: localhost:8080 或 127.0.0.1:8080