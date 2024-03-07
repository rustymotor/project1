const tabWrap=$('.tab_wrapper'),
      targetLink=tabWrap.find('.tab_menu a'),
      tabContent=tabWrap.find('.tab_content>div');
//find란 다시 처음html부터 컴퓨터가 찾지 않도록  시작점을 지정해주는 거다.
//탭버튼 targetLink 클릭함수
// targetLink.on('click',(e)=>{
//     e.preventDefault();
//     $(this).addClass('active');
//     console.log($(this));
// })
//$(this)의 사용에 대해서-이벤트핸들러내에서 사용시 but 이벤트핸들러내에서 실행함수가 화살표함수일 때는 최상위객체 window를 가르킨다. 그렇기 대문에 
//익명함수, 선언적 함수 내에서의 this만 이벤트 발생한 요소가 반환된다.
//그런데 화살표함수의 this는 window를 지칭하지만
//보통함수의 this는 이벤트가 발생한 것을 지칭한다.
targetLink.eq(0).addClass('active');
tabContent.eq(0).addClass('active');
targetLink.on('click',function(e){
    e.preventDefault();
    targetLink.removeClass('active');
    tabContent.removeClass('active');

    let tg=$(this);
    let link=tg.attr('href');
    
    tg.addClass('active');
    $(link).addClass('active');
    console.log(link);
})
