$(document).ready(function(){

    var webAppSite = "http://json-data.herokuapp.com/forms";

    $.ajax({
          url: webAppSite,
          method: 'get',
          dataType: 'json',
        }).done(function(data){

            var view = {data: data};
            var templateString = $("#form").text();
            var listHTML = Mustache.render(templateString, view);
            $("#container").append(listHTML);
    });
});