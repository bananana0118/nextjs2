//큰페이지는 서버컴포넌트
//js기능 넣을 부분만 클라이언트 컴포넌트
import { connectDB } from "@/util/database"

import ListItem from "./ListItem"

export const revalidate = 20
export default async function List() {
    const db = (await connectDB).db("forum")
    const result = await db.collection("post").find().toArray()//컬렉션에 모든 document 꺼내오기
    //db같은 민감한 코드는 서버컴포넌트 안에서만 쓰기

    return (
      <div className="list-bg">
       <ListItem result={result}/>
      </div>
    )
  } 