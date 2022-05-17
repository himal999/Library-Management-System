import express from 'express';
import cors from 'cors';
import 'dotenv/config'


const app = express();

app.use(cors());

app.get('/',(req,res,next)=>{
    res.send("<h1>Hello MERN Stack</h1>");
    next();
})

const PORT = process.env.PORT || 5001;

app.listen(PORT,()=>{
    console.log(`server up on running ${PORT}`);
})
