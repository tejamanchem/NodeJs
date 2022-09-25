const express = require('express')
const axios = require('axios')


const app = express()

const posts = [
    {
       title: 'Headline 1',
       id: 1,
       body: `Hi this is express server !-----------------------!`,
       userId: 1
    },
   
    {
       title: 'Headline 2',
       id: 2,
       body: "This is headline 2 for the http server in post",
       userId: 1
    },
   
    {
       title: 'Headline 3',
       id: 3,
       body: "This is headline 3",
       userId: 1
    }
 ]

 posts.forEach(post=>{
    axios.post(`https://jsonplaceholder.typicode.com/posts/`,{
        body:post
    })
    .then(response =>{
        const {id,title,body} = response.data.body;
        console.log(`post : ${id} : ${title} : ${body}`)

    })
    .catch(error=>{
        console.log(`Error during post request`)
    })
 })