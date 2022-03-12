$(function(){
    $('.star_s li').bind('mouseover',function(){
        // console.log($(this).index());
        var index = $(this).index()
     $('.shows li').eq(index).addClass('show').siblings().removeClass('show');   
    })
})