
document.querySelector('.map>a').onclick=showmap;
function showmap(){
    document.querySelector(".sitemap").style.display="block";
    return false;
}
document.querySelector('.map_head>a').onclick=hidemap;
function hidemap(){
    document.querySelector(".sitemap").style.display="none";
    return false;
}
