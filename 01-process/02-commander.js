import { Command } from "commander"

const program = new Command()

program
    .option('-p <port>', 'Puerto del servidor', 8080)
    .option('--port <port>', 'Puerto del servidor', 8080)

program.parse()

if (program.opts().p == '8080') {
    console.log(`Server Up on port ${program.opts().port}`)
} else {
    console.log(`Server Up on port ${program.opts().p}`)
}
