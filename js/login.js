const loginBtn=$('#login');
const logoutBtn=$('#logout');
// let text=$('.main_banner h2');
// let text2=$('#s_login');
// let text3=$('#s_signin')
// let textold=text.text();
logoutBtn.css('display','none');
// 초기값 *로그인했음' 지정 user = {id:test,password:5246,isLoggedIn:false}-객체임.배열[]에는 각 요소에 이름을 지정할 수 없다. 
//그런데 localStorage는 웹 브라우저 내장 저장소로 데이터를 문자열로 저장해야 하고 객체를 저장하 ㄹ수가 없다. 그래서 JSON.stringify로 json문자열로 변환해야 한다.
//init의 역할은 
function init(){
    if(!localStorage.getItem('user')){
        localStorage.setItem('user',JSON.stringify({id:'test',password:'5246',isLoggedIn:false}))
    }
}
function login(){
    let uid=$("#uid").val();//input 창의 value를 취득하는 함수
    let upw=$("#upw").val();
    let user=JSON.parse(localStorage.getItem('user'));
    if(uid===user.id&&upw===user.password){
        alert("로그인 성공");
        // text.text(`${uid}님${textold}`);
        $(".input_group,#login").css('display','none');
        logoutBtn.css('display','flex');
        // text2.text(`로그아웃`);
        user.isLoggedIn=true;
        localStorage.setItem('user',JSON.stringify(user));
        // text3.css('display','none');
    }   
    else{
        alert("회원전용페이지입니다.");
    }
}

//로그아웃
function logout(){
    let user=JSON.parse(localStorage.getItem('user'));
    if(user.isLoggedIn){ //==true 안 써도 같은 뜻이다.
        alert("로그아웃 성공");
        user.isLoggedIn=false;
        localStorage.setItem('user',JSON.stringify(user));
        // text.text(textold);
        $(".input_group,#login").css('display','flex');
        logoutBtn.css('display','none');
        // text2.text(`로그인`);
    }

}
//로그인/로그아웃 버튼에 이벤트 핸들러 
loginBtn.on('click',(e)=>{
    e.preventDefault();
    login();
})
// logoutBtn.on('click',()=>{})
init();

logoutBtn.on('click',(e)=>{
    e.preventDefault();
    logout();
})