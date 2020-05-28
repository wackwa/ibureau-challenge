const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://black_mirror:S0TC23S2jb0r0mTW@cluster0-5pniq.mongodb.net/db_black_mirror', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = mongoose