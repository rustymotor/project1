$(()=>{
    const visual=$('#brand_visual>ul>li');
    let current = 0;
    let setIntervalID;
    const next=$('.btnImg>img[alt=right]');
    const prev=$('.btnImg>img[alt=left]');
    const pager=$('.pager li');
    let counterEl=`<div class ="counter">${current+1} / ${visual.length}`;
    $('#slide_wrap').append(counterEl);
    let counter =$('.counter');
    //이거 멈추려면 clearInterval(setIntervalID) 써야 된다.
    timer();
    function timer(){
        setIntervalID=setInterval(()=>{
            slideFn();
        },4000);
    }
    
    //슬라이드 인덱스번호계산함수
    function slideFn(){
        let prev=visual.eq(current);
        let prevPage=pager.eq(current);//이건 pager에 쓰는 놈이다.

        move(prev,'0','-100%');
        prevPage.removeClass('on');
        current++;
        if(current>=visual.length){
            current=0;
        }
        
        let next=visual.eq(current);
        let nextPage=pager.eq(current);
        move(next,'100%','0')
        nextPage.addClass('on');
        //어차피 next 때문에 2.3 페어가 2,0으로 되기만해도 자동적으로 1이 오른쪽에 위치하게 된다.left:100%이 되니까.    
        cnt(current);
    }
    function cnt(num) {
        counter.html(`${num+1} / ${visual.length}`);
    }
    //움직이는 함수 tg:대상start 시작점end 어디까지가냐
    function move(tg,start,end){
        tg.css('left',start).stop().animate({left:end},1000,'easeOutCubic');
        //{left:end} 객체라서 중괄호다.
    }
    //stop()-일단 정지
    //정지,실행하기
    $('#slide_wrap').on({
        mouseenter:function(){
            clearInterval(setIntervalID);
        },
        mouseleave:function(){
            timer();
        }
    })
    

    //컨트롤 함수
    //right
    next.on('click',function(e){
        e.preventDefault();
        let prev=visual.eq(current);
        let prevPage=pager.eq(current);//이건 pager에 쓰는 놈이다.

        move(prev,'0','-100%');
        prevPage.removeClass('on');
        current++;
        if(current>=visual.length){
            current=0;
        }
        
        let next=visual.eq(current);
        let nextPage=pager.eq(current);
        move(next,'100%','0')
        nextPage.addClass('on');
        
        cnt(current);
        
    })
    prev.on('click',function(e){
        e.preventDefault();
        let prev=visual.eq(current);
        let prevPage=pager.eq(current);
        move(prev,'0','100%');
        prevPage.removeClass('on');
        current--;
        // if(current<=0){
        //     current=2;
        // }
        if(current==-visual.length){
            current=0;
        }
        let next=visual.eq(current);
        let nextPage=pager.eq(current);
        move(next,'-100%','0');
        nextPage.addClass('on');
        if(current<0){current=visual.length-1;}
        cnt(current);
        
    })
    
    //pager 버튼
    pager.on('click',function(){
        const i = $(this).index();
        pager.removeClass('on');
        $(this).addClass('on');
        pagerMove(i);

    });
    function pagerMove(i){
        let currentEl=visual.eq(current);
        let chosenEl=visual.eq(i); //클릭한 pager index
        console.log(current);
        console.log(i);
        if(current<i){
        currentEl.css({left:0}).stop().animate({left:'-100%'},1000,'easeOutCubic')
        
        chosenEl.css({left:"100%"}).stop().animate({left:'0'},1000,'easeOutCubic')
       
        }
        else if(current>i){
        currentEl.css({left:0}).stop().animate({left:'100%'},1000,'easeOutCubic')
        
        chosenEl.css({left:"-100%"}).stop().animate({left:'0'},1000,'easeOutCubic')
        
        }
        current =i;
        cnt(current);
    }

})//jquery