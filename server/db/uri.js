export default 'mongodb://' +
  process.env.CYLINDER_MONGODB_USER + ':' +
  process.env.CYLINDER_MONGODB_PASSWORD + '@' +
  process.env.CYLINDER_MONGODB_URI
