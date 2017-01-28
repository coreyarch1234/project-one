$(document).ready(function(){
    $('#new-post').submit(function(e){
        e.preventDefault();

        $(".list-group").prepend("<li class='list-group-item'>" + $("#post-body").val() + "</li>");



        // $.post('/posts', post, function(data){
        //     console.log(data)
        //     $('#list-group').append("<li class= 'list-group-item'>" + data.body + "</li>");
        //     $('#new-post')[0].reset();
        // });
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
        // $("#alex-the-bug").fadeIn("slow");
        // $("#alex-the-bug").fadeIn(3000);
    });

});

// $(document).ready(function(){
//     $("#fade-button").click(function(){
//         console.log("clicked")
//         $("#alex-the-bug").fadeIn(4000).hide();
//         // $("#alex-the-bug").fadeIn("slow");
//         // $("#alex-the-bug").fadeIn(3000);
//     });
// });
