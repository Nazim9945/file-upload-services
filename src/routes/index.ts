import express from 'express'
import {localfileupload} from '../controllers/localfileupload';
const router=express.Router()
//@ts-ignore
router.post('/localfileupload', localfileupload);
export default router