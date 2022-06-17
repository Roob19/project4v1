import { Router } from 'express';
import * as authCtrl from '../controllers/auth';

const router = Router()

router.post('/signup', authCtrl.signup);
router.post('/login', authCtrl.login);

export { router }
