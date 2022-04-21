const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './itemImages')
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } 
    else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage, 
    limits: {
        fileSize: 1024 * 1024 * 8
    },
    fileFilter: fileFilter
})

require('dotenv').config()
require('./db')()

const { getAllItems, getSingleItem, addItem, editItem, deleteItem, getCategoryItems, getUserItems, getQualityItems } = require('./controllers/item_controller')
const { register, login, loginRequired, getAllUsers, getSingleUser, editUser, deleteUser } = require('./controllers/user_controller')
const { getAllCategories, addCategory, getSingleCategory, editCategory, deleteCategory } = require('./controllers/category_controller')
const { getAllQualities, getSingleQuality, addQuality, editQuality, deleteQuality } = require('./controllers/quality_controller')
const { getAllReviews, getSingleReview, addReview, editReview, deleteReview, getUserReviews, getUserReviewed } = require('./controllers/review_controller')
const { getAllInteractions, getSingleInteraction, addInteraction, editInteraction, deleteInteraction } = require('./controllers/interaction_controller')
const { getAllUserInteractions, getSingleUserInteraction, addUserInteraction, editUserInteraction, deleteUserInteraction } = require('./controllers/userInteraction_controller')
const { getAllMessages, getSingleMessage, addMessage, editMessage, deleteMessage, getUserSentMessages, getUserReceivedMessages } = require('./controllers/message_controller')
const { getAllLocations, getSingleLocation, addLocation, editLocation, deleteLocation } = require('./controllers/location_controller')
const { getAllConversations, getSingleConversation, addConversation, editConversation, deleteConversation } = require('./controllers/conversation_controller')


const port = process.env.PORT || 3000

const app = express()
app.use(cors())
app.use(express.json())

//Make itemImages folder public
app.use('/itemImages', express.static('itemImages'))

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

// Item Routes 
app.get('/items', getAllItems)
app.get('/items/:id', getSingleItem)
app.post('/items', upload.single('itemImage'), loginRequired, addItem)
app.put('/items/:id', loginRequired, editItem)
app.delete('/items/:id', loginRequired, deleteItem)
app.get('/items/user/:userID', getUserItems)
app.get('/items/category/:categoryID', getCategoryItems)
app.get('/items/quality/:qualityID', getQualityItems)

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

// Review Routes 
app.get('/reviews', getAllReviews)
app.get('/reviews/:id', getSingleReview)
app.post('/reviews', loginRequired, addReview)
app.put('/reviews/:id', loginRequired, editReview)
app.delete('/reviews/:id', loginRequired, deleteReview)
app.get('/reviews/by/:reviewerUserID', getUserReviews)
app.get('/reviews/of/:reviewedUserID', getUserReviewed)

// Interaction Routes 
app.get('/interactions', getAllInteractions)
app.get('/interactions/:id', getSingleInteraction)
app.post('/interactions', loginRequired, addInteraction)
app.put('/interactions/:id', loginRequired, editInteraction)
app.delete('/interactions/:id', loginRequired, deleteInteraction)

// UserInteraction Routes 
app.get('/user_interactions', getAllUserInteractions)
app.get('/user_interactions/:id', getSingleUserInteraction)
app.post('/user_interactions', loginRequired, addUserInteraction)
app.put('/user_interactions/:id', loginRequired, editUserInteraction)
app.delete('/user_interactions/:id', loginRequired, deleteUserInteraction)

// Message Routes 
app.get('/messages', loginRequired, getAllMessages)
app.get('/messages/:id', loginRequired, getSingleMessage)
app.post('/messages', loginRequired, addMessage)
app.put('/messages/:id', loginRequired, editMessage)
app.delete('/messages/:id', loginRequired, deleteMessage)
app.get('/messages/user/sent/:senderUserID', getUserSentMessages)
app.get('/messages/user/received/:receiverUserID', getUserReceivedMessages)

// Location Routes
app.get('/locations', getAllLocations)
app.get('/locations/:id', getSingleLocation)
app.post('/locations', loginRequired, addLocation)
app.put('/locations/:id', loginRequired, editLocation)
app.delete('/locations/:id', loginRequired, deleteLocation)

// Conversation Routes
app.get('/conversations', getAllConversations)
app.get('/conversations/:id', getSingleConversation)
app.post('/conversations', loginRequired, addConversation)
app.put('/conversations/:id', loginRequired, editConversation)
app.delete('/conversations/:id', loginRequired, deleteConversation)

/////////////////////////////////////


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})