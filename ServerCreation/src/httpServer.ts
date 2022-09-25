import http  from "http";

const server = http.createServer((req,res)=>{
    res.write("This  is the response from the server");
    res.end();
})

let port = 3000;

server.listen((port),()=>{
    console.log(`server is running on port ${port}`)
})

export default server