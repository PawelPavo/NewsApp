import * as dotenv from 'dotenv';

const envFound = dotenv.config();

if (!envFound) {
    throw new Error('No .env File');
}

export default {
    keys: {
        newsAPI: process.env.NEWS_API
    }
};