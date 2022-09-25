const express = require('express')
const axios = require('axios')


const app = express()

var num=0

const posts = [
    {
       title: 'Headline 1',
       id: 1,
       body: `sint suscipit perspiciatis velit dolorum 
             rerum ipsa laboriosam odio`,
       userId: 1
    },
   
    {
       title: 'Headline 2',
       id: 2,
       body: "fugit voluptas sed molestias voluptatem provident",
       userId: 1
    },
   
    {
       title: 'Headline 3',
       id: 3,
       body: "voluptate et itaque vero tempora molestiae",
       userId: 1
    }
 ]

setInterval(()=>{
    num++
    console.log(`Wait for 2 seconds`)
    axios.get(`https://jsonplaceholder.typicode.com/posts/${num}`)
    .then(response =>{
        const{id,title}=response.data
        console.log(`Post : ${id} : ${title}\n`)
    })
    .catch(error=>{
        console.log(`error to fetch data` )
    })
},2000)