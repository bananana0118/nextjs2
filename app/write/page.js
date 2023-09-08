import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"

export default async function Write(){
    const session = await getServerSession(authOptions)

    if(!session){

        return <div>로그인하세요</div>
    }

    return (
        <div className="p-20">
            <h4>글작성</h4>
            <form action="/api/post/new" method="POST">
                <input name="title" placeholder="글제목"/>
                <input name="content" placeholder="글내용"/>
                <button type="sumbit">제출</button>
            </form>
        </div>
    )
}