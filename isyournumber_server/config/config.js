module.exports = {
    development: {
        username: 'selectnumber',
        password: process.env.DATABASE_PASSWORD,
        database: 'isyournumber',
        host: 'isyournumber.csmeh7i5hzpa.ap-northeast-2.rds.amazonaws.com',
        dialect: 'mysql',
        logging: false,
    }
}