const mongoose = require('mongoose');
mongoose.connect(`${process.env.MONGODB_URI}${process.env.DATABASE}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then((db) => console.log('conexion exitosa'))
.catch((err) => console.log(err));