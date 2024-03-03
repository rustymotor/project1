$(()=>{
    const visual=$('.pkslide>div');
    let current = 0;
    // let setIntervalID;
    const next=$('#pright');
    const prev=$('#pleft');
    const pager3=$('.pager3 li');
    //이거 멈추려면 clearInterval(setIntervalID) 써야 된다.

    //움직이는 함수 tg:대상start 시작점end 어디까지가냐
    function move(tg,start,end){
        tg.css('left',start).stop().animate({left:end},500,'easeOutCubic');
        //{left:end} 객체라서 중괄호다.
    }
    //stop()-일단 정지
    //정지,실행하기

   
   

    //컨트롤 함수
    //right
    next.on('click',function(){
        let prev=visual.eq(current);
        let prevPage=pager3.eq(current);//이건 pager3에 쓰는 놈이다.

        move(prev,'0','-100%');
        prevPage.removeClass('on');
        current++;
        if(current>=visual.length){
            current=0;
        }
        
        let next=visual.eq(current);
        let nextPage=pager3.eq(current);
        move(next,'100%','0')
        nextPage.addClass('on');
    })
    prev.on('click',function(){
        let prev=visual.eq(current);
        let prevPage=pager3.eq(current);
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
        let nextPage=pager3.eq(current);
        move(next,'-100%','0');
        nextPage.addClass('on');
        
    })
    
    //pager3 버튼
    pager3.on('click',function(){
        const i = $(this).index();
        pager3.removeClass('on');
        $(this).addClass('on');
        pager3Move(i);

    });
    function pager3Move(i){
        let currentEl=visual.eq(current);
        let chosenEl=visual.eq(i); //클릭한 pager3 index
        currentEl.css({left:0}).stop().animate({left:'-100%'},500,)
        
        chosenEl.css({left:"100%"}).stop().animate({left:'0'},500)
        current =i;
    }

})