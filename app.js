const express=require('express');
const jade=require('jade');
const path=require('path');
const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.urlencoded({
    extended:true
}))

app.use('/static', express.static(__dirname+'/static'));


app.set('views',path.join(__dirname,'views'));
app.set('view engine','jade');


app.use('/',require('./routers/index'))
app.use('/api',require('./routers/api'))
app.listen(3000);
