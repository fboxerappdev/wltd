

$(document).ready(function(){

    setTimeout(function(){
        $('.bxslider').bxSlider({
            auto: true,
            autoControls: true
        });
    }, 300);

    $("body").cssAnimate();

    $(".index-gallery ul li").each(function(){
        var src = $(this).find("img").attr("src");
        src = "url("+ src +")";
        $(this).css("background-image",src);
    });


    var status = true;

    $(".menu-toggle").click(function(){
        if(status){
            $(this).find("i").removeClass("fa-bars");
            $(this).find("i").addClass("fa-times");
            $(".menubar").css("height","100%");
            $(".navbar-main").stop(true,false).animate({
                bottom:"0"
            },400);

            $(".bg-menu").stop(true,false).animate({
                opacity:"0.96"
            },400);
            status = false;
        }
        else{
            $(this).find("i").removeClass("fa-times");
            $(this).find("i").addClass("fa-bars");
            $(".navbar-main").stop(true,false).animate({
                bottom:"100%"
            },400);

            $(".bg-menu").stop(true,false).animate({
                opacity:"0"
            },400,function(){
                $(".menubar").css("height","0");
            });
            status = true;
        }
    });

    $(".slider-text span").click(function(){
        var high = $("header").height();
        $('html, body').animate({scrollTop : high},800);
        return false;
    });
    //
    //function headinghi(){
    //
    //    var hi = $(".slider img:first-child").height();
    //    $("header").css("max-height",hi);
    //}
    //
    //
    //headinghi();
    //setTimeout(function(){
    //    headinghi();
    //}, 100);
    //setTimeout(function(){
    //    headinghi();
    //}, 300);


    var complete = document.getElementById("slideimg").complete;

    if(complete){
        var hi = $("#slideimg").height();
        $("header").css("max-height",hi);

        setTimeout(function(){
            var hi = $("#slideimg").height();
            $("header").css("max-height",hi);
        },300);


        clearInterval(myVar);
    }
    else{
        var myVar = setInterval(function(){
            var hi = $("#slideimg").height();
            $("header").css("max-height",hi);
        },1);
    }





    function numbers1(ele){
        var text = ele.attr("data-value");
        var i = 0;
        var myVar1 = setInterval(function(){
            if(i<=text){
                ele.text(i);
                i++;
            }
            else{
                clearInterval(myVar1);
            }
        },10);
    }
    var eletop = $(".numbers").offset().top;
    var winheight = $(window).height();
    var status1 = true;
    function scrool(){
        wintop = $(this).scrollTop();
        if(wintop > (eletop - (winheight*.75)) && status1){
            $(".numbers div").each(function(){
                var ele= $(this).find("span");
                numbers1(ele);
            });
            status1 = false;
        }
    }
    $(window).load(function(){
        $(window).scroll(function(){
            scrool();
        });
        scrool();
    });





});

