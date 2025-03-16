const express =  require("express")

const app = express()

app.get("/auction",(req,res)=>{
    const name =  req.name
    return res.send(`Welcom ${name} to the auction.`)
})

app.listen(8081,()=>console.log("Server Listening at 8081!!!"))