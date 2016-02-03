import 'babel-polyfill'
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
// import jwt from 'express-jwt'
import slug from 'slug'

const app = express()

// const jwtCheck = jwt({
  // secret: new Buffer(process.env.EXPRESSAPI_AUTH0_SECRET, 'base64'),
  // audience: process.env.EXPRESSAPI_AUTH0_CLIENTID
// })

const dbUri = 'mongodb://' +
  process.env.CYLINDER_MONGODB_USER + ':' +
  process.env.CYLINDER_MONGODB_PASSWORD + '@' +
  process.env.CYLINDER_MONGODB_URI
mongoose.connect(dbUri)

const Channel = mongoose.model('Channel', {
  name: String,
  slug: String,
  owner: Array,
  viewers: Array,
  playlist: Array
})

app.use(express.static('dist'))
// app.use('/channels', jwtCheck)
app.use(bodyParser.json())
app.use(cors())

// list all channels
app.get('/channels', (req, res) => {
  Channel.find({}, (err, docs) => {
    if (err) return console.error(err)
    if (docs !== undefined) {
      res.json(docs)
    } else {
      res.status(500)
    }
  })
})

// search channel by slug
app.get('/channels/:slug', (req, res) => {
  Channel.find({ slug: req.params.slug.toLowerCase() }, (err, docs) => {
    if (err) return console.error(err)
    if (docs.length > 0) {
      res.json(docs)
    } else {
      res.status(404).end()
    }
  })
})

// create new channel
app.post('/channels', (req, res) => {
  const newChannel = new Channel(
    Object.assign(
      {},
      req.body,
      { slug: slug(req.body.name).toLowerCase() }
    )
  )
  newChannel.save(err => {
    if (err) return console.error(err)
    res.status(201).json(newChannel)
  })
})

app.put('/channels', (req, res) => {
  Channel.findOneAndUpdate(
    { slug: req.body.slug },
    req.body,
    { new: true },
    (err, doc) => {
      if (err) return console.error(err)
      if (doc) {
        res.status(200).json(doc)
      } else {
        res.status(404).end('Not found')
      }
    })
})

app.delete('/channels', (req, res) => {
  Channel.findOneAndRemove({ slug: req.body.slug }, (err, doc) => {
    if (err) return console.error(err)
    if (doc) {
      res.status(200).end()
    } else {
      res.status(404).end('Not Found')
    }
  })
})

export default app
