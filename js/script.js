$(function(){
    $(".navbar-toggle").blur(function(event){
        var screenwidth=window.innerWidth;
        if(screenwidth<768)
        {
            $("#collapsable-nav").collapse('hide');
        }
    });
});
(function(){
    var ss=new Object; 
    var slide=0;
    ss.slideshow=function(){
        var i;
        var x;
        x=document.getElementsByClassName("jumbo");
        for(i=0;i<x.length;i++)
        {
            x[i].style.display="none";
        }
        slide++;
        if(slide>=x.length)
        {
            slide=1;
        }
        x[slide-1].style.display="block";
        setTimeout(ss.slideshow,10000);
    }
    ss.slideshow();
    window.ss=ss;
})(window);
