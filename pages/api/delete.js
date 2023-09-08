import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import { authOptions } from "./auth/[...nextauth]"
import { getServerSession } from "next-auth"

export default async function handler(req, res){
    if(req.method ==="POST"){
        return res.status(200).json("안녕")
    }
    let session = await getServerSession(req,res,authOptions)
    console.log(session.user)

    if(req.method ==="DELETE"){
        const id = JSON.parse(req.body)._id
        const db = (await connectDB).db("forum")
        const findItem = await db.collection("post").findOne({_id : new ObjectId(id)})//컬렉션에 모든 document 꺼내오기
   
        console.log(findItem)
        if(findItem&&findItem.author === session.user.email||session.user.role==="admin"){
            const result = await db.collection("post").deleteOne({_id : new ObjectId(id)})//컬렉션에 모든 document 꺼내오기
            console.log(result)
            return res.status(200).json("삭제완료")
        }else{
            return res.status(500).json("현재유저와 작성자 불일치")
        }
    }

    
}