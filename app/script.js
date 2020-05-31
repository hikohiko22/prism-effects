$(function(){

    // prism-effectsがDOMに存在しない場合
    if(!$("#prism-effects")[0]){
          $("<div></div>", {
            id:"prism-effects"
          }).html(function(){
            var inText = "<ul>";
            inText += '<div class="particle"></div>';
            inText += '<div class="particle"></div>';
            inText += '<div class="particle"></div>';
            inText += '<div class="particle"></div>';
            inText += '<div class="particle"></div>';
            inText += '<div class="particle"></div>';
            inText += '<div class="particle"></div>';
            inText += '<div class="particle"></div>';
            inText += '<div class="particle"></div>';
            inText += '<div class="particle"></div>';
            inText += '<div class="particle"></div>';
            inText += '<div class="particle"></div>';
            inText += '<div class="particle"></div>';
            inText += '<div class="particle"></div>';
            inText += '<div class="particle"></div>';
            inText += '<div class="particle"></div>';
            return inText;
            }).appendTo($("body"))

        }else{
        // prism-effectsがDOMに存在する場合
        if($("#prism-effects").css("display") !== "block"){
            $("#prism-effects").fadeIn(1);
        }else{
            $("#prism-effects").fadeOut(1);
        }
    }

});