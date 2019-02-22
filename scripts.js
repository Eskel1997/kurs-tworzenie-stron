$(document).ready(function(){
  $("#login").click(function(){
      event.preventDefault();
      var name = $("#name").val();
      var email = $("#email").val();
      var password = $("#password").val();
      $(".contact-right").html(name + "<br>" + email + "<br>" + password);
  });
  /*przejscia przy wczytywaniu strony*/
  $("p,h1,h2,h3,h4,a,img,form,button").hide().fadeIn(1000);

  /*AJAX*/
  $(".button").click(function(){

    $("#answear").text("Ładowanie treści...");
      $.ajax({
          type: "GET",
          url: "https://jsonplaceholder.typicode.com/users",
          success: function(data) {
              $("#answear").html("");
              for(var i = 0; i<data.length;i++){
                  $("#answear").append("<p>" + data[i].name + "</p>");
              }
              
          },
          dataType: "jsonp"
      });
  });
    
});