const express = require('express')
const cors = require('cors')

require('dotenv').config()
require('./db')()

const {
    getAllItems,
    getSingleItem,
    addItem
} = require('./controllers/items_controller')


const port = process.env.PORT || 3000


const app = express()
app.use(cors())
app.use(express.json())

// Routes 
app.get('/', (req, res) => {
    res.json('Hello World!')
})

app.get('/items', getAllItems)
app.get('/items/:id', getSingleItem)
app.post('/items', addItem)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})