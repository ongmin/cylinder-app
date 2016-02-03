import 'babel-polyfill'
import express from 'express'
import mongoose from 'mongoose'
import dbUri from '../../server/db/uri'

mongoose.connect(dbUri)

const app = express()

export default app
