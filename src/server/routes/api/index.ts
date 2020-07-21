import {Router} from 'express';
import newsAPIRouter from './newsAPI'
import wsjRouter from './wsj'
import homeRouter from './home'

const router = Router()

router.use('/news', newsAPIRouter)
router.use('/wsj', wsjRouter)
router.use('/home', homeRouter)


export default router;