$(function(){
    $('.sum-selector').on("change", function(){
        var sum = 0;
        console.log("IN");
        $('.sum-selector option:selected').each(function(){
            var val = $(this).val();
            console.log(val);
            sum = parseInt(sum) + parseInt(val);
        });
        $("#sum_of_select").text(sum);
    });
});