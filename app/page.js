import Image from "next/image";
import styles from "./page.module.css";
import { MongoClient } from "mongodb";
import { connectDB } from "@/util/database";

export default async function Home() {

  const db = (await connectDB).db("forum")
  const result = await db.collection("post").find().toArray()//컬렉션에 모든 document 꺼내오기
  //db같은 민감한 코드는 서버컴포넌트 안에서만 쓰기

  return <div>안녕</div>;
}
