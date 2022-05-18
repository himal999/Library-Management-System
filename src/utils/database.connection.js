import mongoose, { connection, Connection } from 'mongoose';
import config from '../config/index'


let database;

const connect = async ()=>{
    const DATABASE =   config.DB_CONNECT;

    if(database){
        return database;
    }

    mongoose.connect(DATABASE).then((Connection)=>{
        database = connection;
        console.log("DB Connected");
    })
}

export {connect};