import mongoose from 'mongoose'
import dbUri from './uri'

mongoose.connect(dbUri)

export default mongoose.model('Channel', {
  name: String,
  slug: String,
  owner: Array,
  viewers: Array,
  playlist: Array
})
