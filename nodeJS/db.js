const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/crudDB',
    (err) => {
        if (!err)
            console.log('MongoDB Connection success');
        else
            console.log("MongoDB Error : " + JSON.stringify(err, undefined, 2));
    }
);

module.exports = mongoose;