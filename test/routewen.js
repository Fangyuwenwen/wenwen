const app=require('express')();

app.get('/',function(req,res) {
    res.send('<h1>HELLO WENWEN!</h1>');
});

app.get('/mywenwen',function(req,res) {
    res.send('<h1>HELLO MYWENWEN!</h1>');
});

app.get('/cutewenwen',function(req,res) {
    res.send('<h1>HELLO CUTEWENWEN!</h1>');
});

app.get('/wenweniscute',function(req,res) {
    let name = req.query.name; //透過request的query取得name的字串
    let age = req.query.age;//透過request的query取得age的數值
    res.send('<h1>' + name + ' say' + age + 'wenwencute！</h1>');
});

app.listen(8080,function() {
    console.log('wenwenreallycute!');
});