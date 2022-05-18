import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import logger from './utils/logger';
import {connect} from "./utils/database.connection"


const app = express();

app.use(cors());

app.get('/',(req,res,next)=>{
    res.send("<h1>Hello MERN Stack</h1>");
    next();
})

const PORT = process.env.PORT || 5003;

app.listen(PORT,()=>{
    
   logger.info(`server up on running ${PORT}`);
   connect();
})
