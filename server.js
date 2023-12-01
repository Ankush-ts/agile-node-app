const express=require("express");
const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send('<h1>Hello Bidu</h1>')
})

app.listen(3000)