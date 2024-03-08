addEventListener('DOMContentLoaded',()=>{ //<---이놈의 역할은 defer와 같다.
    // let text=document.querySelector('.progress .txt');
    let bar=document.querySelector('.progress .bar');
    let section=document.querySelector('.wrap');
    let wh=window.innerHeight;
    /*진행률 구하기*/

   
    function getPercent(sct){
        let scrollHeight=section.clientHeight;
        let scrollRealHeight=scrollHeight-wh;
        let scrollPercent=Math.floor((sct/scrollRealHeight)*100); //정수만 얻기
        render(scrollPercent);
    }
    
    /*진행률 표시하기*/
    
    
    function render(scrollPercent){
        if (scrollPercent>100) {
            scrollPercent=100;
        }
        // text.textContent=scrollPercent + `%`;
        bar.style.width=scrollPercent + '%';
    
    }
    
    
    /*스크롤 이벤트 함수/스크롤 얻어와서 getPercent에 전달*/
    
    window.addEventListener('scroll',()=>{
        let sct=window.scrollY;
        getPercent(sct);
    
    });
    
    
}) 