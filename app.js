//arquivo de configuracao
const port = 7000; 
const express = require("express");
const app = express();
const consign = require("consign");

app.set("view engine","ejs");
app.set("views","./app/views");
app.use(express.static('./app/public'));


consign().include("app/routes").into(app);


app.listen(port,()=>{
    console.log(`Rodando na porta ${port}`);
});