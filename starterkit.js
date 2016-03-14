$(document).ready(function() {

    $("#orderedlist").addClass("red");
    $("#orderedlist li").addClass("letras");
    last = $("#orderedlist li:last");
    last.hover(function(){
    	last.addClass("green");
    },function(){
    	last.removeClass("green");
    });

});
