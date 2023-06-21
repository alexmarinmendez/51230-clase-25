import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT || 8080

const app = express()

app.get('/', (req, res) => res.send('Hola Mundo!'))

app.listen(port, () => console.log(`Server Up on port ${port}`))
