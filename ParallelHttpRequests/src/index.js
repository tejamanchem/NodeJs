


const express = require('express')
const cluster = require('cluster')

const numCPUs = require('os').cpus().length

console.log('Number of cpus runnning',numCPUs)

const app = express()
const port = 3000;

if(cluster.isPrimary){
    console.log(`Master ${process.pid} running`);
    
    for(let i=0;i<numCPUs;i++){
        cluster.fork();
    }
    cluster.on('exit',(worker,code,signal)=>{
        console.log(`Worker ${worker.process.pid} died`)
    });
}
else{
    app.listen(port,err=>{
        if(err){
            console.log(`Error in server setup`)
        }
        else{
             console.log(`Worker ${process.pid} started`)
        }
    })
}

