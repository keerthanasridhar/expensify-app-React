const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname,'..','public')
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));



//to make sure that it doesn't throw a 404 when you refresh
app.get('*',(req,res)=>{
res.sendFile(path.join(publicPath,'index.html')); //path
});
app.listen(port,()=>{
    console.log(`server is up!`);
});