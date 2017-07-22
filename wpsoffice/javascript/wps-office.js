/**
 * Created by kingsoft on 16/7/26.
 */

// 副级导航栏固定

$(document).ready(function () {
    $(window).scroll(function(){
        if($(window).scrollTop()>=40){
            $("#subScroll").addClass("fixation");
            $("#navbar_header").removeClass("NoallScreen").removeClass("allScreen");
        }else{
            $("#subScroll").removeClass("fixation");
        }
    });
})

// 小屏幕导航栏动态效果实现
$(document).ready(function () {
    $("#btn").click(function () {
        $(this).css("background","none");
        if($("span[name=left]").hasClass("tr")){
            $("span[name=left]").addClass("tr1").removeClass("tr");
            $("span[name=right]").addClass("th1").removeClass("th");
            $("#navbar_header").removeClass("").addClass("NoallScreen");
            $("#subScroll").css("display","block");
        }else{
            $("span[name=left]").removeClass("tr1").addClass("tr");
            $("span[name=right]").removeClass("th1").addClass("th");
            $("#subScroll").css("display","none");
            $("#navbar_header").removeClass("NoallScreen").addClass("allScreen");
        }

    })
    $("#btn1").click(function () {
        if($("span[name=left1]").hasClass("sbth")){
            $("span[name=left1]").addClass("sbth1").removeClass("sbth");
            $("span[name=right1]").addClass("sbtr1").removeClass("sbtr");
        }else{
            $("span[name=left1]").removeClass("sbth1").addClass("sbth");
            $("span[name=right1]").removeClass("sbtr1").addClass("sbtr");
        }

    })
    $("a[name=collapseClick]").click(function () {

        if($($(this).find('.xleft')).hasClass("xleftAction")){
            $($(this).find('.xleft')).removeClass("xleftAction").addClass("xleftA");
            $($(this).find('.xright')).removeClass("xrightAction").addClass("xrightA");
            $($(this).parent()).removeClass("bgChange");
            $($(this).find(".panel")).removeClass("Nopanel").addClass("panel");
        }else{
            $($(this).find('.xleft')).removeClass("xleftA").addClass("xleftAction");
            $($(this).find('.xright')).removeClass("xrightA").addClass("xrightAction");
            $($(this).parent()).addClass("bgChange");
            $($(this).find(".panel")).removeClass("panel").addClass("Nopanel");
        }
    })
    //导航栏点击小点的出现与消失
    $("#navUl li").click(function () {
        $(this).find(".circle").addClass("yesDisplay").removeClass("noOpcity");
        $(this).siblings("li").children(".circle").removeClass("yesDisplay").addClass("noOpcity");
        $(this).find("a").addClass("Opcity").removeClass("OpcityNo");
        $(this).siblings("li").find("a").addClass("OpcityNo").removeClass("Opcity");
    })

})
