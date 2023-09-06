import { connectDB } from "@/util/database"
import Link from "next/link"
import DetailLink from "./DetailLink"

export default async function List() {
    const db = (await connectDB).db("forum")
    const result = await db.collection("post").find().toArray()//컬렉션에 모든 document 꺼내오기
    //db같은 민감한 코드는 서버컴포넌트 안에서만 쓰기

    return (
      <div className="list-bg">
        {result.map((item,idx)=>{
     
            return (
                <div className="list-item" key={idx}>
                <Link prefetch={false} href={`/detail/${item._id}`}>
                  <h4>{item.title}</h4></Link>
                  <Link href={`/edit/${item._id}`}>✏️</Link>
                  <p>{item.content}</p>
                  <DetailLink></DetailLink>
                </div>)
        })}
      </div>
    )
  } 