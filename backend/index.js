const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
const db = require('./queries')
const port = 3001

app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/posts', db.getPosts)
app.get('/post/:id', db.getPostById)
app.get('/postByUserId/:id', db.getPostByUserId)
app.post('/post', db.createPost)
app.put('/post/:id', db.updatePost)
app.delete('/post/:id', db.deletePost)
app.get('/users', db.getUsers)
app.get('/user/:id', db.getUserById)
app.get('/users/email', db.getUserByEmail)
app.post('/user', db.createUser)
app.put('/user/:id', db.updateUser)
app.delete('/user/:id', db.deleteUser)
app.get('/apply/:id', db.getApplyByPostId)
app.post('/apply', db.createApply)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})