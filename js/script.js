// vanilla script 아무것도 첨가되지 않은 자바스크립트라는 뜻
// const pop = document.querySelector('.popup');
// const btn = document.querySelector('.popup>span');
// btn.onclick=function(){
//     pop.style.display="none";
// } 
$('.popup>span').on('click',function(){
    $('.popup').fadeOut(500)
})

//pc상태 사이트맵 
const ham = document.querySelector('.map');
const close = document.querySelector('.map_head>a');
const sitemap = document.querySelector('sitemap');
ham.onclick=function(){
    sitemap.style.display="block";
}
close.onclick=function(){
    sitemap.style.display="none";
}

