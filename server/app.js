import 'babel-polyfill'
import express from 'express'
import cors from 'cors'
import jwt from 'express-jwt'
import mongoose from 'mongoose'
import dbUri from './db/uri'
import channels from './routes/channels'
import users from './routes/users'

mongoose.connect(dbUri)

const app = express()

const jwtCheck = jwt({
  secret: new Buffer(process.env.CYLINDER_AUTH0_SECRET, 'base64'),
  audience: process.env.CYLINDER_AUTH0_CLIENTID
})

app.use(express.static('dist'))
app.use('/channels', jwtCheck)
app.use('/channels', channels)
app.use('/users', users)
app.use(cors())

export default app
