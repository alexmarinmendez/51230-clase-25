import express from 'express'
import { fork } from 'child_process'
const app = express()

app.get('/', (req, res) => res.send('Hola Mundo!!!'))
app.get('/suma', (req, res) => {
    const child = fork('./operacion.js')
    child.on('message', result => {
        res.send(`El resultado de la operacion es ${result}`)
    })
})

app.listen(8080, () => console.log('Server Up!!'))