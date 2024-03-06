addEventListener('DOMContentLoaded',() => {
    const divs = document.querySelectorAll("div");
    console.log(divs);
    divs.forEach((div)=>{
        //요소.classList.add('클래스') - 클래스 추가함
        div.classList.add('addClass' , 'cls1');

        div.addEventListener('mouseenter',function(){
            this.classList.remove('cls1');
            this.style.background='yellow';
        })
    });   

    divs[2].addEventListener('click',function(){
        divs[0].classList.toggle('cls2');
    })
    divs[3].addEventListener('click',function(){
        if(this.classList.contains('addClass')){
            console.log(this.classList.contains('addClass'))
            this.style.transition='all 0.5s';
            this.style.fontSize='200%';
            this.classList.remove('addClass');
        }
        else{
            this.style.transition='all 0.5s';
            this.style.fontSize='100%';
            this.classList.add('addClass');
        }
        

        
    })





});
