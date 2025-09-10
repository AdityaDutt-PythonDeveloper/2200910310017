const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res, next)=>{
    res.send("This solution is made by Aditya Dutt")
    next()
})

let users = [
    {
    id : 1,
    email : "adityadutt990@gmail.com",
    name : "Aditya Dutt",
    mobileNo : "9116297012",
    githubusername : "",
    rollno : "2200910310017",
    accesscode : "NWktBu"
    },
]


app.get('/evaluation-service/register', (req, res)=>{
    res.send(users)
    next()
})

app.get('/shorturls', (req, res)=>{
    res.send('This is short url page')
    const req1 = {
        url : "https://docs.google.com/document/d/1bvdnHXcSfNQQtd42OuU-rpNQKj5dYKuLKg4wz8SyaZ0/edit?tab=t.0",
        validity : "30",
        shortcode : "docbyAfford1"
    }

    const shot = {
        shortlink : "docbyAfford1",
        expiry : "2025-10-14 22:30"

    }

    if (req1) return res.send(200).json(shot)
        
})

app.listen(port, ()=>{
    console.log(`Aditya's Solution is running at http://localhost:${port}`)
})
