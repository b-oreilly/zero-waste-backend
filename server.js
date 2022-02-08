const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')

require('dotenv').config()
require('./db')()

const {
    getAllItems,
    getSingleItem,
    addItem
} = require('./controllers/items_controller')

const {
    register,
    login,
    loginRequired
} = require('./controllers/user_controller')


const port = process.env.PORT || 3000

const app = express()
app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        jwt.verify(req.headers.authorization.split(' ')[1], 'zero_waste_app', (err, decode) => {
            if (err) req.user = undefined
            req.user = decode
            next()
        })
    } else {
        req.user = undefined
        next()
    }
})

/////////////////////////////////////
// Test Route 
app.get('/', (req, res) => {
    res.json('Hello World!')
});
// Item Routes 
app.get('/items', getAllItems)
app.get('/items/:id', loginRequired, getSingleItem)
app.post('/items', loginRequired, addItem)

// Auth Routes 
app.post('/register', register)
app.post('/login', login)

/////////////////////////////////////


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})