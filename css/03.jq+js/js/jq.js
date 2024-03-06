
$(window).on('scroll',function(){
    let sct=parseInt($(window).scrollTop());
    console.log(sct);
    if(sct>300){
        $('header').addClass('fix');
    }
    else{
        $('header').removeClass('fix');
    }
})

let hamBtn=$('#ham-menu');
let navBar=$('#nav-bar');
hamBtn.on('click',function(){
    navBar.toggleClass('active');
    hamBtn.toggleClass('fa-times');
})