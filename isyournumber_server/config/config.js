module.exports = {
    development: {
        username: 'selectnumber',
        password: process.env.DATABASE_PASSWORD,
        database: 'isyournumber',
        host: 'localhost',
        dialect: 'mysql',
        logging: false,
    }
}