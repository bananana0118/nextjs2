import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function handler(요청, 응답){
    if(요청.method ==="POST"){
        return 응답.status(200).json("안녕")
    }


    if(요청.method ==="DELETE"){
        const id = JSON.parse(요청.body)._id
        const db = (await connectDB).db("forum")
        const result = await db.collection("post").deleteOne({_id : new ObjectId(id)})//컬렉션에 모든 document 꺼내오기

        return  응답.status(200).json("완료")
    }

    
}