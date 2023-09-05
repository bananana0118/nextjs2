import { connectDB } from "@/util/database"

export default async function Handler(req,res){


    if(req.method==="POST"){
        const db = (await connectDB).db("forum")
        
        if(req.body.title==="")
            return res.status(500).json("내용이 비어있습니다.")
    try {
        let result = await db.collection("post").insertOne(req.body);
        console.log(result)

        return res.status(200).redirect(302,"/list")
    }catch(error){
        return res.status(404).json("에러가 발생했습니다.")

    }
    }
    //유저가 서버로 글 보내면
    //db에 저장시키기

}