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
        var y=document.getElementsByClassName("q1");
        for(i=0;i<x.length;i++)
        {
            x[i].style.display="none";
            y[i].style.visibility="hidden";
        }
        slide++;
        if(slide>=x.length)
        {
            slide=1;
        }
        x[slide-1].style.display="block";
        y[slide-1].style.visibility="visible";
        setTimeout(ss.slideshow,10000);
    }
    ss.slideshow();
    window.ss=ss;
})(window);
