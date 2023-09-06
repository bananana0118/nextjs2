import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Handler(req,res){


    if(req.method =="POST"){

        let changed = {
            title: req.body.title,
            content: req.body.content
            }
        const db = (await connectDB).db("forum")
        const result = await db.collection("post").updateOne({_id:new ObjectId(req.body._id)},
                                                {$set:changed});
        console.log(result)


        //$inc 연산자, 필요한거 증감만
        return res.status(200).redirect(302,"/list");

    }
}