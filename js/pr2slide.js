    const list = document.querySelector('.banner');
    const listLi = document.querySelectorAll('.banner>div');
    const show_num = 6;
    const total = listLi.length;
    const li_width = parseInt(getComputedStyle(listLi[0]).width);
    let num = 0;
     for (var i = 0; i < show_num; i++) {
       var copyobj = listLi[i].cloneNode(true);//자식까지복사
       copyobj.classList.add('clone');
       list.appendChild(copyobj);
     } 

    document.querySelector('.arrow_r').addEventListener('click', function (e) {
      if (num === listLi.length) {
        num = 0;
        list.style.transition = 'none';
        list.style.marginLeft = '0px';
      }
      setTimeout(function () {
        num++;
        list.style.transition = 'margin-left .5s';
        list.style.marginLeft = -(li_width+80) * num + "px";
        e.preventDefault();
      }, 50);
    });

    document.querySelector('.arrow_l').addEventListener('click', function (e) {
      if (num === 0) {
        num =6;
        list.style.transition = 'none';
        list.style.marginLeft = -li_width * num + "px";
      }
      setTimeout(function () {
        num--;
        list.style.transition = 'margin-left .5s';
        list.style.marginLeft = -(li_width+80) * num + "px";
        e.preventDefault();
      }, 50);
    });