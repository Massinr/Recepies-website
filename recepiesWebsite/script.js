const category = $('#categories');
var count = 0;
category.click(function(){
    if(count === 0){
        $(".categories-menu").animate({top : "540px"})
        count++;
    }else{
    $(".categories-menu").animate({top : "940px"})
        count = 0;
    }
})