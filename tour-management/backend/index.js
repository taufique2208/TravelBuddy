import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import tourRoute from './routes/tour.js'
import userRoute from './routes/users.js'
import authRoute from './routes/auth.js'
import reviewRoute from './routes/reviews.js'
import bookingRoute from './routes/bookings.js'

dotenv.config()
const app = express()
const port =process.env.PORT||8000
const corsOptions={
    origin:true,
    credentials:true
}


app.get('/',(req,res)=>{
    res.send('api is working');
})
//XP0MaMIStaSweOL7

mongoose.set('strictQuery',false);
const connect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology: true,

        })
        console.log('Mongo db conected')
    }catch(e){console.log('Mongodb connection failed')}
}

//middleware
app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser())
app.use('/api/v1/tour',tourRoute)
app.use('/api/v1/user',userRoute)
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/review',reviewRoute)
app.use('/api/v1/booking',bookingRoute)
// app.use('/api/v1/search')

app.listen(port,()=>{
    connect()
    console.log('server lstening on port  ', port)
})