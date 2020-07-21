//@ts-nocheck

import * as fetch from 'node-fetch';
import {Router} from 'express';
import config from '../../config';

const router = Router();
const NewsAPIkey = config.keys.newsAPI
let ts = Date.now();
let date_ob = new Date(ts);
let day = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();

router.get('/', async(req, res, next) => {
    const articles = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${NewsAPIkey}`)
    const data = await articles.json()
    res.json(data)
})

router.get('/:search', async(req, res, next) => {
    const {search} = req.params
    console.log(search)
    const date = (year + "-" + month + "-" + day);
    const articles = await fetch(`https://newsapi.org/v2/everything?q=${search}&from=${date}&language=en&sortBy=publishedAt&apiKey=${NewsAPIkey}`)
    const data = await articles.json()
    res.json(data)
})


export default router;