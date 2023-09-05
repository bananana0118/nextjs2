import { connectDB } from "@/util/database";

export default async function Handler(req,res){



    if(req.method ==="POST"){
        if(req.body.userId === "" || req.body.userPassword===""){
            return res.status(200).json("값을 입력해 주세요");
        }

        const db = (await connectDB).db("forum")
        let result = await db.collection("post").find({"userId":req.body.userId}).toArray();
        console.log(result)
        console.log(result.length)
      
        if(result.length!==0){
            console.log("이미 존재하는 아이디입니다.")
            return res.status(200).redirect(302,"/signup")
            //왜 302를 붙여줘야 하나?
        }


        await db.collection("post").insertOne(req.body);
        return res.status(200).json("제출완료")
    }

    ///이미 존재하는 아이디로는 가입할 수 없게


}