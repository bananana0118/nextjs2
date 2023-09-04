import {MongoClient} from "mongodb"
const url = process.env.URL
const options = {useNewUrlParser:true}

let connectDB

if(process.env.NODE_ENV ==="development"){ //개발모드일땐 이렇게 해라. 개발모드일때 모두 재실행 하기 때문에.
    if(!global._mongo){
        global._mongo = new MongoClient(url,options).connect()
    }
    connectDB = global._mongo
}else{
    connectDB = new MongoClient(url, options).connect()
}




export {connectDB}