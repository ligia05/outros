 const express = require("express");
 let app = express();
let produtos= ("database/produtos.json")
app.get('/', (req, res)=>res.send("Olá mundo"));
app.get ('/produtos', (req,res) => res.send(produtos));
app.listen(3000, ()=>console.log("Servidor rodando na porta 3000")  )
