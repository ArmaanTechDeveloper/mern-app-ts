import express from "express"
import path from "path"
import dotenv from "dotenv"

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

console.log('node env ---------->' , process.env.NODE_ENV)

app.use(express.json());

app.get('/hello' , (req , res) => {
    return res.send({
        message: 'hello world'
    })
})

app.get('/getenv' , (req , res) => {
    return res.send({
        message: `${process.env.NODE_ENV} set correctly`
    })
})

app.use(express.static(path.join(__dirname  ,'..', 'public')))

app.use('/*' , (req , res) => {
    return res.sendFile(path.join(__dirname ,'..', 'public' , 'index.html'))
})

app.listen(PORT , () => {
    console.log(`Server running on port ${PORT}`)
})