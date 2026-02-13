import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import session from 'express-session'

import router from "./router/index.js";


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
    session({
        secret: 'mySecretKey123',
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: false,
            maxAge: 1000 * 60 * 60 * 24
        }
    })
)

app.use(
    cors({
        origin: 'http://localhost:63342',
        credentials: true
    })
)
app.use(router)

let users = []


app.listen(process.env.APP_PORT || 3000, () => {
    console.log('server started')
})
