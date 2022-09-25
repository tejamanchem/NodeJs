import express from 'express'

const app = express()

app.use("/",(req,res,next)=>{
    res.send("This is the express server")
})

app.get("/getServer",(req,res,next)=>{
    res.send("This is the  response from the get request")
})


let port = 6060
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})