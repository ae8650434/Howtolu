$("#eye").click(function () {
    if ($("#password").attr("type") == "text") {
      $("#password").attr("type", "password");
      $("#eye").css("opacity", 0.5);
      $("#eye").attr("src", "../public/img/EyeSlash.png");
    } else {
      $("#password").attr("type", "text");
      $("#eye").css("opacity", 1);
  
      var img = $("#eye").attr("src");
      console.log(img);
      if (img == "../public/img/eye.png") {
        $("#eye").attr("src", "../public/img/EyeSlash.png");
      } else {
        $("#eye").attr("src", "../public/img/eye.png");
      }
    }
  });

$("#eye1").click(function () {
    if ($("#check").attr("type") == "text") {
      $("#check").attr("type", "password");
      $("#eye1").css("opacity", 0.5);
      $("#eye1").attr("src", "../public/img/EyeSlash.png");
    } else {
      $("#check").attr("type", "text");
      $("#eye1").css("opacity", 1);
  
      var img = $("#eye1").attr("src");
      console.log(img);
      if (img == "../public/img/eye.png") {
        $("#eye1").attr("src", "../public/img/EyeSlash.png");
      } else {
        $("#eye1").attr("src", "../public/img/eye.png");
      }
    }
});

var password = $('#password').val()
var check = $('check').val()
$('#register').click((e)=>{
    if(password != check){
        alert('請確認密碼是否相同')
        e.preventDefault()
    }
})