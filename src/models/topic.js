const mongoose = require('mongoose')

const Topic = mongoose.model('Topic', {
    description: {
        type: String,
        required: true,
        trim: true
    }, 
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = Topic