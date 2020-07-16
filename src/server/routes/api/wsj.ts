//@ts-nocheck

import * as fetch from 'node-fetch';
import {Router} from 'express';
import config from '../../config';

const router = Router();
const NewsAPIkey = config.keys.newsAPI

router.get('/', async(req, res, next) => {
    const articles = await fetch(`http://newsapi.org/v2/everything?domains=wsj.com&apiKey=${NewsAPIkey}`)
    const data = await articles.json()
    res.json(data)
})

export default router;