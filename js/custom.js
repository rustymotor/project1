const slides=$('.slide>div[class*="slide"]')
/* setInterval(함수,시간간격) */
//setInterval(function(){
//    document.write("이거나오냐");
//}, 5000);
let idx=0;
function slide(){
    // console.log(slides);//slides 안에는 slide1-3이 들어가있다.
    // jQuery.each(slides,function) //each라는 건 위의 것들을 한번씩 시키는 것이다. 이건 정석
    slides.each(function(a,b){
        // console.log("a",a); //여기서는 slide의 값이 들어온다
        $(b).removeClass('on');//b는 jquery객체 아니라 씌운다
        
    })
    slides.eq(idx).addClass('on')
    idx++;
    if(idx>=slides.length){
        idx=0;
    }
}
setInterval(function(){
    slide();
}, 3000);
