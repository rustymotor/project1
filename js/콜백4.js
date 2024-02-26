function time(){
    let day=new Date();
    let now=day.toLocaleTimeString();
    /* toLocaleTimeString() 현지시간 표시 */
    console.log(now);
    document.querySelector('#time').innerHTML=now;
};
setInterval(time, 1000);

