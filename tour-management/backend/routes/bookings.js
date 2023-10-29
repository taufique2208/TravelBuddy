import express from 'express'
import { createReview } from '../controllers/reviewController.js'
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'
import { createBooking, getBooking } from '../controllers/bookingController.js'

const router = express.Router()

router.post('/',verifyUser,createBooking)
router.get('/:id',verifyUser,getBooking)
router.get('/',verifyAdmin,createBooking)

// router.post('/:tourId',c)



export default router