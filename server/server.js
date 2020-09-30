const express = require("express")
const app = express()
app.listen(8080, ()=> {
    console.log("Merge sefule")
})

//get / put / post / delete => HTTP verbs

app.get("/ping",(req,res)=>{
res.send("Ia uite sefule sunt pe web")
})