export default function Signup(){


    return (
        <div>
            <h2>회원가입</h2>
            <form action={"/api/post/signup"} method="POST"> 
                <label>아이디 <input type="text" name="userId"></input></label> 
                <label>비밀번호 <input type="password" name="userPassword"></input></label>
                <button type="submit">가입하기</button>
            </form>
        </div>
    )
}