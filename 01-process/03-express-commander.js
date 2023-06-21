import express from 'express'
import { Command } from "commander"

const program = new Command()

program
    .option('-p <port>', 'Puerto del servidor', 8080)
    // .option('--port <port>', 'Puerto del servidor', 8080)s

program.parse()

let port = program.opts().p

// if ((program.opts().p == '8080') || (program.opts().port !== '8080')) {
//     port = program.opts().p
// } else {
//     port = program.opts().port
// }

const app = express()

app.get('/', (req, res) => res.send('Hola Mundo!!!'))

app.listen(port, () => console.log(`Server Up on port ${port}`))