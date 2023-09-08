import { connectDB } from "@/util/database";
import bcrypt from "bcrypt"

export default async function handler(req,res){

    if(req.method ==="POST"){



        let db = (await connectDB).db("forum");

        //이메일 존재하는지 체크
        let result = await db.collection("user_cred").findOne({email:req.body.email})
        if(result){
            res.status(500).json("이미 존재하는 이메일입니다.")
        }
        console.log(req.body)
        if(!(req.body.password&&req.body.email && req.body.name )){
            res.status(500).json("빈 값을 채워주세요")
        }
        //비밀번호 널값인지 체크
        let hash = await bcrypt.hash(req.body.password, 10)
        req.body.password = hash
        await db.collection("user_cred").insertOne(req.body)

        res.status(200).json("가입성공")
    }
}