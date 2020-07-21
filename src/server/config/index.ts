import * as dotenv from 'dotenv';

const envFound = dotenv.config();

if (!envFound) {
    throw new Error('No .env File');
}

export default {
    keys: {
        newsAPI: process.env.NEWS_API,
        aws_key_id: process.env.AWS_KEY_ID,
        aws_key: process.env.AWS_KEY
    },
    mysql: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_SCHEMA,
        charset: process.env.DB_CHARSET
    },
};