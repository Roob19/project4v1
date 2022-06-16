import { Router } from 'express'
import * as barCtrl from "../controllers/bar.js"
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========= Public Routes ========= 



// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
router.get('/:query',  checkAuth, barCtrl.search )




export {
  router
}