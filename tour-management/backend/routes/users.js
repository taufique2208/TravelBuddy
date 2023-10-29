import express from 'express'
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/userController.js'
const router = express.Router()

import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'

router.put('/:id',updateUser)

router.delete('/:id',deleteUser)

router.get('/:id',verifyUser,getSingleUser)

router.get('/',verifyAdmin, getAllUser)

export default router;