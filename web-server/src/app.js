// Express is a minimal and flexible Node.js web application framework

const express = require('express')
const path = require('path')

const app = express()

const publicDirectoryPath = (path.join(__dirname, '../public'))


// express.static(root, [options])
// The root argument specifies the root directory from which to serve static assets. 
// The function determines the file to serve by combining req.url with the provided root directory.

// this line sets up handlebars in app.js

// app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
    res.render('index')
})

// the get method on app tells server what to do when a URL is visited

app.get('/help', (req, res) => {
    res.send('Hello need some help?')
})

// setting up the server

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})