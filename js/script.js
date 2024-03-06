// vanilla script 아무것도 첨가되지 않은 자바스크립트라는 뜻
// const pop = document.querySelector('.popup');
// const btn = document.querySelector('.popup>span');
// btn.onclick=function(){
//     pop.style.display="none";
// } 
$('.popup>span').on('click',function(){
    $('.popup').fadeOut(500)
})


//top 버튼
//window 내려가면 보여주기
$(window).scroll(function () {
    if( $(this).scrollTop() > 100 ){
      $(".top_btn").addClass("show");
    }
    else{
      $(".top_btn").removeClass("show");
    }
    
  });
  //누르면 올라가기
 
  $('.top_btn').on('click',function(){
    window.scrollTo({top : 0, behavior: 'smooth'}); 

  })

