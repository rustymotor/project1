$(()=>{
/* 변수할당 */
let divs=$('div');
/* 클래스추가 */
divs.addClass('addClass');

/* 클래스추가후 삭제 */
divs.eq(0).addClass('cls1 cls2').removeClass('addClass');
divs.eq(1).addClass('cls1 cls2').removeClass('addClass');
/* 함수 붙여서 쓰는 것. method-chaining 이라 한다. */
/* 클래스토글 */
divs.eq(2).on('click',function(){
    divs.eq(0).toggleClass('hide');
})

/* 클래스있니? */
divs.eq(3).on('click',function(){
    if($(this).hasClass('addClass')){
        $(this).animate({fontSize:"200%"},500);
    }
})













})//jquery