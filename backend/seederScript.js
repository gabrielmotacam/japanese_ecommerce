require('dotenv').config();

const productsData = require('./data/products');
const connectDB = require('./config/db');
const Product = require('./models/Product');

connectDB();

const importData = async () => {
    try {
        await Product.deleteMany({});

        await Product.insertMany(productsData);

        console.log("Dados importados com sucesso!");

        process.exit();
    } catch (error) {
        console.error("Erro na importação de dados!");
        process.exit(1);
    }
};

importData();