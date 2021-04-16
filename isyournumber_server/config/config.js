module.exports = {
    development: {
        username: 'root',
        password: process.env.DATABASE_PASSWORD,
        database: 'isyournumber',
        host: 'localhost',
        dialect: 'mysql',
        logging: false,
    }
}