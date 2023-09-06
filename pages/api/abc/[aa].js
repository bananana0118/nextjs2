//api/abc/아무문자로 요청하면 실행해줌

export default async function handler(req,res){

    console.log(req.query)

    return res.status(200).json()
}