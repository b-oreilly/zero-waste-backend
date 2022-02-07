const mongoose = require('mongoose');

const init = () => {
    mongoose.set('debug', true)

    mongoose.connect(process.env.DB_ATLAS_URL, {
        useNewURLParser: true,
        // createIndexes: true,
    })
    .catch((err)=>{
        console.error('error: ' + err.stack)
        process.exit(1);
    })

    mongoose.connection.on('open', () => {
        console.log('connected to database')
    })
}

mongoose.Promise = global.Promise

module.exports = init