$(document).ready(function(){
    $('#new-post').submit(function(e){
        e.preventDefault();
        var post = $(this).serialize();
        $.ajax({
           url: '/posts',
           data: post,
           error: function() {
              alert('Error');
           },
           dataType: 'json',
           success: function(data) {
              $('.list-group').append("<li class='list-group-item'>" + "<a href='/posts/{{this._id}}'>" + data.body + "</a>" + "</li>");
              $('#new-post')[0].reset();
           },
           type: 'POST'
        });
    });
    $('#remove-post').click(function(e){
        e.preventDefault();
        var post = $(this);
        var postId = post.data('id');
        console.log(postId);
        $.ajax({
           url: '/posts/' + postId,
           type: 'DELETE',
           success: function(data) {
              post.parent().remove();
           },
        });
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
