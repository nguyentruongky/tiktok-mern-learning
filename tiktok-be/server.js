import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'
import Videos from './dbModel.js'

// app config
const app = express()
const port = 9000

// middlwares
app.use(express.json())
app.use(Cors())

// DB config
const connection_url =
    'mongodb+srv://admin:upTFI0jjRneZ8Qjb@cluster0.mspfy.mongodb.net/tiktok?retryWrites=true&w=majority'
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

// api endpoints
app.get('/', (req, res) => {
    res.status(200).send('hello')
})

app.get('/v1/posts', (req, res) => {
    Videos.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

app.post('/v1/posts', (req, res) => {
    const dbVideos = req.body
    Videos.create(dbVideos, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

// listen
app.listen(port, () => console.log(`listening on localhost:${port}`))
