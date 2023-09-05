"use client"

import {useRouter} from "next/navigation"

export default function DetailLink(){
    let router = useRouter()   //클라이언트 컴포넌트에서만 사용가능

    return <button onClick={()=>{router.push("/detail")}}>버튼</button>
}

//router.refresth() 변동된 부분만 새로 받아오는 약한 새로고침
//router.prefetch() 페이지 미리로드, 나중에 매우 빠르게 방문할 수 있음
//Link태그에 prefetch 기능을 이미 해줌,
// 화면에서 link태그를 만나면 자동으로 해당 주소를 prefetch 해줌
//prefetch 는 개발모드일땐 활용 불가