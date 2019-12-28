const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded())
app.use(bodyParser.json());

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
});

app.get('/', (req, res) => {
    res.send('working')
})

const users = {
    0: {name: 'Bill', age: 29},
    1: {name: 'Jill', age: 32},
    2: {name: 'Will', age: 47}
}
let id = 3

app.get('/users', (req, res) => {
    res.json(users)  
})
//Now send a GET request to http://localhost:3000/users

//route to individual user
app.get('/users/:id', (req, res) => {
    if (users[req.params.id]){
          res.json(users[req.params.id])
    } else {
          res.json('User not found')
    }
})

//create route
app.put('/users', (req, res) => {
    if (req.body.name && req.body.age){
         const {name, age} = req.body
         users[id] = {name, age}
         res.send(`Successfully created user with id: ${id}`)
         id++
    } else {
         res.send('Failed to create user')
    }
})

//update a user's attr with their unique id
app.patch('/users', (req, res) => {
    if (users[req.body.id]){
          let user = users[req.body.id]
          user.name = req.body.name || user.name
          user.age = req.body.age || user.age
          res.json(user)
    } else {
          res.json('Failed to update or find user with that id.')
    }
})

//ability to delete a user
app.delete('/users', (req, res) => {
    if (users[req.body.id]){
        delete users[req.body.id]
        res.send(`Deleted user with ID ${req.body.id}`)
    } else {
         res.send(`Failed to find user with ID ${req.body.id}`)
    }
})