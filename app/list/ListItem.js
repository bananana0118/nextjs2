"use client"
import Link from "next/link"
import DetailLink from "./DetailLink"

export default function ListItem(props){

    const result = props.result

    return (
        <div>
        { result.map((item,idx)=>{
    
            return (
                <div className="list-item" key={idx}>
                <Link prefetch={false} href={`/detail/${item._id}`}>
                <h4>{item.title}</h4></Link>
                <Link href={`/edit/${item._id}`}>✏️</Link>
                <p>{item.content}</p>
                <span onClick={(e)=>{
                    // fetch("/api/delete",{
                    //     body:JSON.stringify({_id:item._id}),
                    //     method:"DELETE"
                    // }).then((r)=>{
                    //     if(r.status == 200) {
                    //         return r.json()
                    //       } else {
                    //         //서버가 에러코드전송시 실행할코드
                    //       }
                    //     })
                    //     .then((result)=>{ 
                    //       //성공시 실행할코드
                    //         e.target.parentElement.style.opacity = 0
                    //         setTimeout(()=>{
                    //             e.target.parentElement.style.display = "none"
                    //         },1000)
                    //     }).catch((error)=>{
                    //       //인터넷문제 등으로 실패시 실행할코드
                    //       console.log(error)
                    //     })
                    fetch("/api/abc/sss")
                }}>🗑</span> 
                <DetailLink></DetailLink>
                </div>)
        })}
    </div>//ajax쓰면 새로고침 없이 get, post 요청날릴수있다.
    )
}