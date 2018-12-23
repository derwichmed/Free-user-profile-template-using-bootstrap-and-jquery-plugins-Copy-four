$(function (){
    isSideBarHidden = true;
   $('.mobile_nav > img').click(function (){
        if(isSideBarHidden){
            $('.nav_bar').css('height','0px');
            $('.nav_bar').show();
            $('.nav_bar').animate({
                height: "340px"
            }, 500);
            $(this).attr('src','img/Close-Windows-2.png'); 
            isSideBarHidden = false;
        }
        else{
            $('.nav_bar').animate({
                height: "0px"
            }, 500,function (){
                $('.nav_bar').hide();
            });
            $(this).attr('src','img/side_bar_icon.png');
            isSideBarHidden = true;
        }
   });
   $('.nav_bar_item').click(function (){
       
        if($(window).width() <= 800){
            $('.nav_bar').animate({
                height: "0px"
            }, 500,function (){
                $('.nav_bar').hide();
            });
            $('.mobile_nav img').attr('src','img/side_bar_icon.png');
            isSideBarHidden = true;
        }
       $('.nav_bar_item').css('background-color', '#2c373b');
       $(this).css('background-color','#fed32c');
       $('.profile_item:visible').hide();
        switch ($(this).attr('class')){
            case "nav_bar_item one":
                    $('.profile_item').eq(0).fadeIn("slow");
                    break;
            case "nav_bar_item two":
                    $('.profile_item').eq(1).fadeIn("slow");
                    break;
            case "nav_bar_item three":
                    $('.profile_item').eq(2).fadeIn("slow");
                    break;
            case "nav_bar_item four":
                    $('.profile_item').eq(3).fadeIn("slow");
                    break;
            case "nav_bar_item five":
                    $('.profile_item').eq(4).fadeIn("slow");
                    break;    
        }
   });
});