$(()=>{
  const visual=$('.banner>div');
  let current = 0;
  let setIntervalID;
  const next=$('.arrow_r');
  const prev=$('.arrow_l');
  //이거 멈추려면 clearInterval(setIntervalID) 써야 된다.
 
  //슬라이드 인덱스번호계산함수

  //움직이는 함수 tg:대상start 시작점end 어디까지가냐
  function move(tg,start,end){
      tg.css('left',start).stop().animate({left:end},500,'easeOutCubic');
      //{left:end} 객체라서 중괄호다.
  }
``
  //컨트롤 함수
  //right
  next.on('click',function(){
      let prog1=visual.eq(current);
      let prog2=visual.eq(current+1);
      let prog3=visual.eq(current+2);
      let prog4=visual.eq(current+3);
      let prog5=visual.eq(current+4);
      let prog6=visual.eq(current+5);
   // 0 1 2 를 선택
      move(prog1,'0','33%');
      move(prog2,'33%','66%');
      move(prog3,'66%','100%'); 
      move(prog4,'200%','200%');
      move(prog5,'200%','200%');
      move(prog6,'-66%','-33%');
 
      current++;
      if(current>=5){
          current=0;
      }
      
      // let next=visual.eq(current+4);
  
      // move(next,'-66%','-33%')
  
  })
  prev.on('click',function(){
    let prog1=visual.eq(current);
    let prog2=visual.eq(current+1);
    let prog3=visual.eq(current+2);
    let prog4=visual.eq(current+3);
    let prog5=visual.eq(current+4);
    let prog6=visual.eq(current+5);
    
    move(prog1,'0','-33%');
    move(prog2,'33%','0%');
    move(prog3,'66%','33%');
    move(prog4,'100%','66%');
    move(prog5,'200%','200%');
    move(prog6,'200%','200%');
      current--;
      // if(current<=0){
      //     current=2;
      // }
      if(current==-visual.length){
          current=0;
      }
      let next=visual.eq(current);
   
      move(next,'-100%','0');
   
      
  })
  

})//jquery