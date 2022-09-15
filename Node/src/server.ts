import {connection} from '../dbConnection'
import express from 'express'
import { heavyComputation } from './services/indexFile';
import NodeCache from 'node-cache'


const myCache = new NodeCache()
const app = express()



app.listen(8000,()=>{    
    console.log(`server started with port 8000`) 
})

app.get('/',(req,res)=>{
    res.send('Home Page')
})

app.get('/api',(req,res)=>{

    if(myCache.has('uniqueKey')){
        console.log('Retrieved value from cache !!')
        res.send("Result :"+myCache.get('uniqueKey'))
    }
    else{
        let result = heavyComputation()

        myCache.set('uniqueKey',result)
        console.log('value not set in cache' + 'performing computation')
        res.send('Result :'+result)
    }
})


