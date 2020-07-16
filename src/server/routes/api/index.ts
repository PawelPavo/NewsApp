import {Router} from 'express';
import newsAPIRouter from './newsAPI'
import wsjRouter from './wsj'

const router = Router()

router.use('/news', newsAPIRouter)
router.use('/wsj', wsjRouter)


export default router;