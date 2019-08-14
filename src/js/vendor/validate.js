$(document).ready(function() {
    $('input#name, input#phone, input#email').unbind().blur(function() {
        var id = $(this).attr('id');
        var val = $(this).val();

        switch (id) {
            case 'name':
                var rv_name = /^[a-zA-Zа-яА-Я]+$/;

                if (val.length > 2 && val != '' && rv_name.test(val)) {
                    $(this).parent().addClass('not_error').removeClass('error');
                } else {
                    $(this).parent().removeClass('not_error').addClass('error');
                }
                break;
            case 'email':
                var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;

                if (val.length > 2 && val != '' && rv_email.test(val)) {
                    $(this).parent().addClass('not_error').removeClass('error');
                } else {
                    $(this).parent().removeClass('not_error').addClass('error');
                }
                break;
            case 'phone':

                if (val.length >= 12 && val != '') {
                    $(this).parent().addClass('not_error').removeClass('error');
                } else {
                    $(this).parent().removeClass('not_error').addClass('error');
                }
                break;

        }
    }).blur(function(){
        var id = $(this).attr('id');
        var val = $(this).val();

        switch (id) {
            case 'name':
                var rv_name = /^[a-zA-Zа-яА-Я]+$/;

                if (val.length > 2 && val != '' && rv_name.test(val)) {
                    $(this).parent().addClass('not_error').removeClass('error');
                } else {
                    $(this).parent().removeClass('not_error').addClass('error');
                }
                break;
            case 'email':
                var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;

                if (val.length > 2 && val != '' && rv_email.test(val)) {
                    $(this).parent().addClass('not_error').removeClass('error');
                } else {
                    $(this).parent().removeClass('not_error').addClass('error');
                }
                break;
            case 'phone':

                if (val.length >= 12 && val != '') {
                    $(this).parent().addClass('not_error').removeClass('error');
                } else {
                    $(this).parent().removeClass('not_error').addClass('error');
                }
                break;

        }
    });

    $('form#iForm').submit(function(e) {

        e.preventDefault();

        if ($('.not_error').length == 3) {

            $.ajax({
                url: './send.php',
                type: 'post',
                data: $(this).serialize(),

                beforeSend: function(xhr, textStatus) {
                    $('form#contactForm :input').attr('disabled', 'disabled');
                },

                success: function(response) {
                    $('form#contactForm :input').removeAttr('disabled');
                    $('#contact-popup').show();
                }
            });
        } else {
            return false;
        }
    });

    $('form#search').submit(function(e) {

        e.preventDefault();

        if ($('.not_error').length == 1) {

        } else {
            return false;
        }
    });

});