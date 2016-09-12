
$(function() {
    var array = [
    "/persbox/img/pers/pers01.png",
    "/persbox/img/pers/pers02.png",
    "/persbox/img/pers/pers03.png",
    "/persbox/img/pers/pers04.png",
    "/persbox/img/pers/pers05.png",
    "/persbox/img/pers/pers06.png",
    "/persbox/img/pers/pers07.png",
    "/persbox/img/pers/pers08.png",
    "/persbox/img/pers/pers09.png",
    "/persbox/img/pers/pers10.png",
    "/persbox/img/pers/pers12.png",
    "/persbox/img/pers/pers13.png",
    "/persbox/img/pers/pers14.png",
    "/persbox/img/pers/pers15.png"
    ];
  
    var l = array.length;
    var r = Math.floor(Math.random()*l);
    var bgimgurl = array[r];
    $(".key_visual").css('background-image',('url("'+bgimgurl+'")'));
    
    
});