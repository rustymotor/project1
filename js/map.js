
document.querySelector('.burger').onclick=showmap;


function showmap(){
    document.querySelector(".sitemap").style.display="block";
    return false;
}
document.querySelector('.map_head>a').onclick=hidemap;
function hidemap(){
    document.querySelector(".sitemap").style.display="none";
    return false;
}

// const ham = document.querySelector('.map');
// const closemenu = document.querySelector('.map_head>a');
// const sitemap = document.querySelector('.sitemap');
// ham.addEventListener('click', function() { sitemap.style.display = "block"; });
// closemenu.addEventListener('click', function() { sitemap.style.display = "none"; });



