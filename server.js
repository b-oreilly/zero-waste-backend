const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')

require('dotenv').config()
require('./db')()

const { getAllItems, getSingleItem, addItem, editItem, deleteItem } = require('./controllers/item_controller')
const { register, login, loginRequired, getAllUsers, getSingleUser, editUser, deleteUser } = require('./controllers/user_controller')
const { getAllCategories, addCategory, getSingleCategory, editCategory, deleteCategory } = require('./controllers/category_controller')
const { getAllQualities, getSingleQuality, addQuality, editQuality, deleteQuality } = require('./controllers/quality_controller')


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
app.get('/items/:id', getSingleItem)
app.post('/items', loginRequired, addItem)
app.put('/items/:id', loginRequired, editItem)
app.delete('/items/:id', loginRequired, deleteItem)

// Category Routes 
app.get('/categories', getAllCategories)
app.get('/categories/:id', getSingleCategory)
app.post('/categories', loginRequired, addCategory)
app.put('/categories/:id', loginRequired, editCategory)
app.delete('/categories/:id', loginRequired, deleteCategory)

// Quality Routes 
app.get('/qualities', getAllQualities)
app.get('/qualities/:id', getSingleQuality)
app.post('/qualities', loginRequired, addQuality)
app.put('/qualities/:id', loginRequired, editQuality)
app.delete('/qualities/:id', loginRequired, deleteQuality)

// User Routes 
app.post('/register', register)
app.post('/login', login)
app.get('/users', loginRequired, getAllUsers)
app.get('/users/:id', loginRequired, getSingleUser)
app.put('/users/:id', loginRequired, editUser)
app.delete('/users/:id', loginRequired, deleteUser)

/////////////////////////////////////


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})