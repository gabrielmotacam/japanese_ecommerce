
require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("Conecção com MONGODB bem sucedida!");
    } catch (error) {
        console.log("Ops! Erro na conecção com o MONGODB");
        process.exit(1);

    }
}

module.exports = connectDB;