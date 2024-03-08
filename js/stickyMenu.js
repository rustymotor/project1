
///////////////////glass clone해서 sticky menu
const win = $(window);
const header = $(".glass");
let headerCloneContainer = $('<div class="glass-clone"></div>');

//요소 복제하는 함수
function clone() {
  const headerContent = header.contents(); //자식요소 전부다 가져와 변수에 할당
  const headerClone = headerContent.clone(); //자식요소 다 복제후 변수에 할당
 
  headerCloneContainer.append(headerClone);
  console.log(headerCloneContainer);
  headerCloneContainer.appendTo("body");
}
//높이구하기
let threshold =header.offset().top + header.outerHeight();
console.log(threshold);
clone();
win.on('scroll',()=>{
    
    if(win.scrollTop()>threshold){
        headerCloneContainer.addClass('visible');
    }
    else{
        headerCloneContainer.removeClass('visible');

    }
})
