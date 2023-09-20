import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import Comment from "./Comment";

export default async function Detail(props) {
  const db = (await connectDB).db("forum");
  const result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) }); //컬렉션에 모든 document 꺼내오기
  console.log(props.params.id); //다이나믹 라우트안에 넣은 값을 가져올 수 있다.
  console.log(result);
  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{result.title}</h4>
      <h4>{result.content}</h4>
      <Comment _id={result._id.toString()} />
    </div>
  );
}
