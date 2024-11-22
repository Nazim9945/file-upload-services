import express from 'express'
import {localfileupload} from '../controllers/localfileupload';
import { imageupload } from '../controllers/imageupload';
import { vedioupload } from '../controllers/vedioupload';
import { imageReducerupload } from '../controllers/imageReduceupload';
import { vedioReducerupload } from '../controllers/vedioReducerupload';
const router=express.Router()

router.post('/localfileupload', localfileupload);
router.post('/imageupload', imageupload);
router.post('/vedioupload', vedioupload);
router.post('/imageReducerupload', imageReducerupload);
router.post('/vedioReducerupload', vedioReducerupload);

export default router