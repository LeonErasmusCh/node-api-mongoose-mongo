require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')
const router = require('./routes')
const HOST = process.env.HOST || 'locahost'
const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(cors({ 
    origin: '*'
}))

app.use(router);

/* // GET, POST, PUt, DELETE
app.get('/', (request, response) => {
    //request.params
    console.log(request.body)
    console.log('API REST on method GET')
    return response.status(200).json({ 'message': 'API REST on method GET'})
})
app.post('/', (request, response) => {
    //request.params
    console.log(request.body)
    console.log('API REST on method POST')
    return response.status(201).json({ 'message': 'API REST on method POST'})
})
app.put('/', (request, response) => {
    //request.params
    console.log(request.body)
    console.log('API REST on method PUT')
    return response.status(200).json({ 'message': 'API REST on method PUT'})
})
app.delete('/', (request, response) => {
    //request.params
    console.log(request.body)
    console.log('API REST on method DELETE')
    return response.status(200).json({ 'message': 'API REST on method DELETE'})
}) */


app.listen(PORT, () => {
    console.log(`Server running at http://${HOST}:${PORT}`)
})