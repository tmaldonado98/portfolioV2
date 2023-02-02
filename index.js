$("#about_container").scrollTop(0);
$("#work_container").scrollTop(0);
$("#contact_container").scrollTop(0);

function showabout(){
    $("#about_container").css("display","inherit");
    $("#about_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideInLeft");
    },800);
}
function closeabout(){
    $("#about_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideOutLeft");
        $("#about_container").css("display","none");
    },800);
}
function showwork(){
    $("#work_container").css("display","inherit");
    $("#work_container").addClass("animated slideInRight");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideInRight");
    },800);
}
function closework(){
    $("#work_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideOutRight");
        $("#work_container").css("display","none");
    },800);
}
function showcontact(){
    $('#contact_container').scrollTop(0);
    $("#contact_container").css("display","inherit");
    $("#contact_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideInUp");
    },800);
}
function closecontact(){
    $("#contact_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideOutDown");
        $("#contact_container").css("display","none");
    },800);
}
setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#about").removeClass("animated fadeIn");
      $("#contact").removeClass("animated fadeIn");
      $("#work").removeClass("animated fadeIn");
    },1000);
},1500);


// $('audio').trigger('play');

$('#toggle-audio').on('click', function () {
    if ($('#toggle-audio').prop('paused')) {
        $('audio').trigger('play')
        
    } else { 
        $('audio').trigger('pause')
    // if ($('#toggle-audio').prop('play')) {
        // $('audio').trigger('pause')    
    }
    
})
/*
$('#submit-msg').on('click', function(){
    $.ajax({
        url: 'contactScript.php',
        type: 'POST',
        data: {
            submit: 'submit',
            name: $('input[name="name"]').text(),
            email: $('input[name="email"]').text(),
            message: $('input[name="message"]').text(),
        },
        success: function(){
            $('input[name="name"]').val('');
            $('input[name="email"]').val('');
            $('input[name="message"]').val('');
            $('.sent').addClass('sent-visible');
            console.log('ajax success');
            setTimeout(() => {
                $('.sent').removeClass('sent-visible');
            }, 8000);
            
        }
    })
})*/