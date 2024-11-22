import express from 'express'
import {localfileupload} from '../controllers/localfileupload';
import { imageupload } from '../controllers/imageupload';
import { vedioupload } from '../controllers/vedioupload';
const router=express.Router()

router.post('/localfileupload', localfileupload);
router.post('/imageupload', imageupload);
router.post('/vedioupload', vedioupload);
export default router