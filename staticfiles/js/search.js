$(document).ready(function(){ 
    $("#id_input").on('keyup', function(){
        var value = $(this).val();
        $.ajax({
            url: "{% url 'ajax_autocomplete' %}",
            data: {
              'word': value 
            },
            dataType: 'json',
            success: function (data) {
                words = data.words;
                $("#input_list").autocomplete({
                    source: words,
                    minLength: 2,
                    open: function(){
                        setTimeout(function () {
                            $('.ui-autocomplete').css('z-index', 99);
                        }, 0);
                    }
                });       
            }
        });        
    });
});
// $(document).ready(function(){ 
//     $("#id_input").autocomplete({
//         source: "{% url 'ajax_autocomplete' %}",
//         minLength: 2,
//         open: function(){
//             setTimeout(function () {
//                 $('.ui-autocomplete').css('z-index', 99);
//             }, 0);
//         }
//     });
// });