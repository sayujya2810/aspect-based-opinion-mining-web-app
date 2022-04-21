const express = require("express")


const app = express()

app.use(express.static("public"))
// app.use(favicon(__dirname + '/public/favicon.ico'))

app.listen(3003, ()=>{
    console.log(`Connected to ${3003}`)
})