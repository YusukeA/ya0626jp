/*Light Box*/
    $(document).ready(function(){
        //POPUP
        $("figure#img01").click(function(){
            $("#BlackWindow, #lightbox-panel01").fadeIn(300);/*表示速度は数値を調整*/
         })
         
        $("figure#img02").click(function(){
            $("#BlackWindow, #lightbox-panel02").fadeIn(300);
         })
         
        $("figure#img03").click(function(){
            $("#BlackWindow, #lightbox-panel03").fadeIn(300);
         })
         
        $("figure#img04").click(function(){
            $("#BlackWindow, #lightbox-panel04").fadeIn(300);
         })
         
        $("figure#img05").click(function(){
            $("#BlackWindow, #lightbox-panel05").fadeIn(300);
         })
         
        $("figure#img06").click(function(){
            $("#BlackWindow, #lightbox-panel06").fadeIn(300);
         })
         
        $("figure#img07").click(function(){
            $("#BlackWindow, #lightbox-panel07").fadeIn(300);
         })
         
        $("figure#img08").click(function(){
            $("#BlackWindow, #lightbox-panel08").fadeIn(300);
         })
         
        $("figure#img09").click(function(){
            $("#BlackWindow, #lightbox-panel09").fadeIn(300);
         })
         
        $("figure#img10").click(function(){
            $("#BlackWindow, #lightbox-panel10").fadeIn(300);
         })
         
        $("figure#img11").click(function(){
            $("#BlackWindow, #lightbox-panel11").fadeIn(300);
         })
         
        $("figure#img12").click(function(){
            $("#BlackWindow, #lightbox-panel12").fadeIn(300);
         })
         
        $("figure#img13").click(function(){
            $("#BlackWindow, #lightbox-panel13").fadeIn(300);
         })
         
        //背景の黒地をクリックしたらLightBoxを閉じる
          $("#BlackWindow").click(function(){
            $("#BlackWindow, #lightbox-panel01").fadeOut(300);
            $("#BlackWindow, #lightbox-panel02").fadeOut(300);
            $("#BlackWindow, #lightbox-panel03").fadeOut(300);
            $("#BlackWindow, #lightbox-panel04").fadeOut(300);
            $("#BlackWindow, #lightbox-panel05").fadeOut(300);
            $("#BlackWindow, #lightbox-panel06").fadeOut(300);
            $("#BlackWindow, #lightbox-panel07").fadeOut(300);
            $("#BlackWindow, #lightbox-panel08").fadeOut(300);
            $("#BlackWindow, #lightbox-panel09").fadeOut(300);
            $("#BlackWindow, #lightbox-panel10").fadeOut(300);
            $("#BlackWindow, #lightbox-panel11").fadeOut(300);
            $("#BlackWindow, #lightbox-panel12").fadeOut(300);
            $("#BlackWindow, #lightbox-panel13").fadeOut(300);
         })
    })