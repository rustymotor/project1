const arc = document.querySelector('.arcs');
const arcLi = document.querySelectorAll('.arcs>div');
const show_num2 = 4;
const total2 = arcLi.length;
const Li_width2 = parseInt(getComputedStyle(arcLi[0]).width);
let num2 = 0;
 for (var i = 0; i < show_num2; i++) {
   var copyobj = arcLi[i].cloneNode(true);//자식까지복사
   copyobj.classList.add('clone');
   arc.appendChild(copyobj);
 } 
document.querySelector('#arrow_f').addEventListener('click', function (e) {
  if (num2 === arcLi.length) {
    num2 = 0;
    arc.style.transition = 'none';
    arc.style.marginLeft = '0px';
  }
  setTimeout(function () {
    num2++;
    arc.style.transition = 'margin-left .5s';
    arc.style.marginLeft = -(Li_width2+15) * num2 + "px";
    e.preventDefault();
  }, 50);
});

document.querySelector('#arrow_b').addEventListener('click', function (e) {
  if (num2 === 0) {
    num2 =6;
    arc.style.transition = 'none';
    arc.style.marginLeft = -Li_width2 * num2 + "px";
  }
  setTimeout(function () {
    num2--;
    arc.style.transition = 'margin-left .5s';
    arc.style.marginLeft = -(Li_width2+15) * num2 + "px";
    e.preventDefault();
  }, 50);
});