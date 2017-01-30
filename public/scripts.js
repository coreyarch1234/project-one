$(document).ready(function(){
    $('#new-post').submit(function(e){
        e.preventDefault();
        $(".list-group").prepend("<li class='list-group-item'>" + $("#post-body").val() + "</li>");
    });
});



$(document).ready(function(){
console.log("ready");

    $("#hide-button").click(function(){
        $("#alex-the-bug").hide();
    });
    $("#show-button").click(function(){
        $("#alex-the-bug").show();
    });
    $("#fade-button").click(function(){
        console.log("clicked")
        $("#alex-the-bug").fadeOut(1000);
    });
    $("#success-button").click(function(){
        console.log("clicked")
        $(".text-success").removeClass("text-success");
    });

});
