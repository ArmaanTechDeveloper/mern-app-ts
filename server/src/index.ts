import express from "express"
import path from "path"

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/hello' , (req , res) => {
    return res.send({
        message: 'hello world'
    })
})

app.use(express.static(path.join(__dirname  ,'..', 'public')))

app.use('/*' , (req , res) => {
    return res.sendFile(path.join(__dirname ,'..', 'public' , 'index.html'))
})

app.listen(PORT , () => {
    console.log(`Server running on port ${PORT}`)
})