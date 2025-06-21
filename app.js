const express = require('express')
const connectDB = require('./config/database')
const { Dog } = require('./models/dog')
const dogRouter = require('./routes/dogRoutes') 
const PORT = process.env.PORT || 3000;

const app = express()

app.use(express.json())

app.use('/api/perros', dogRouter) 


const start = async () => {
  try {
    connectDB()
    app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

start()