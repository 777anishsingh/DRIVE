const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({
    path: {
        type: String,
        required: [true, 'path is required']
    },
    originalname: {
        type: String,
        required: [true, 'Originalname is required']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: [true, 'user is required']
    }
})
const user = module.exports = mongoose.model('File', fileSchema)
module.exports = user