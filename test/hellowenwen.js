const app = require('express')();
app.get('/', function(req,res){
    res.send('<h1>HELLO WENWEN！</h1><br><p>How Are You?</p>');
});
app.listen(8080, function(){
    console.log('YES 8080PORT');
});