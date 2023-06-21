import express from 'express'
import config from './config.js'

const port = config.port || 8080

const app = express()

app.get('/', (req, res) => res.send('Hola Mundo!'))

app.listen(port, () => console.log(`Server Up on port ${port}`))
