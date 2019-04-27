const express = require('express')
require('mongoose');

const User = require('./models/user')
const Topic = require('./models/topic')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())


app.post('/users', (req, res) => {
    const user = new User(req.body)

    user.save().then(() => {
        res.status(201).send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.post('/topics', (req, res) => {
    const topic = new Topic(req.body)
    
    task.save().then(() => {
        res.status(201).send(topic)
    }).catch((e) => {
        res.status(400).send(e)
    })
})



app.listen(3000, () => {
    console.log('Server is up on port ' + port)
})