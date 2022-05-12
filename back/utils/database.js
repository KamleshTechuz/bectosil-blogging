const mongoose = require('mongoose')

const mong = mongoose.connect('mongodb://127.0.0.1:27017/Bectosil', (err) => {
    if(!err){
        console.log('Database connected.');
    }else{
        console.log('Database not connected');
    }
})

module.exports = mong