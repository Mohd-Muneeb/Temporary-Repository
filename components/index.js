const express = require('express');

const app = express();

app.set('view engine' , 'hbs');

app.get('/' , (req , res ) =>{
    res.render('index');
})

app.get('/select' , (req , res) =>{
    res.render('selection');
})

app.listen( 3000 , () => {
    console.log("you are listening on port 3000");
});