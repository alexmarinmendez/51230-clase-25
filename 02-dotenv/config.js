import dotenv from 'dotenv'

const environment = 'DEVELOPMENT'

dotenv.config({
    path: environment === 'DEVELOPMENT' ? './.env.development' : './.env.production'
})

export default {
    port: process.env.PORT
}