$("#eye").click(function () {
  if ($("#password").attr("type") == "text") {
    $("#password").attr("type", "password");
    $("#eye").css("opacity", 0.5);
    $("#eye").attr("src", "./public/image/EyeSlash.png");
  } else {
    $("#password").attr("type", "text");
    $("#eye").css("opacity", 1);

    var img = $("#eye").attr("src");
    console.log(img);
    if (img == "../public/img/eye.png") {
      $("#eye").attr("src", "./public/image/EyeSlash.png");
    } else {
      $("#eye").attr("src", "./public/image/eye.png");
    }
  }
});

$("#check").click(function () {
  if ($("#checkeye").attr("type") == "text") {
    $("#checkeye").attr("type", "password");
    $("#check").css("opacity", 0.5);
    $("#check").attr("src", "./public/image/EyeSlash.png");
  } else {
    $("#checkeye").attr("type", "text");
    $("#check").css("opacity", 1);

    var img = $("#check").attr("src");
    console.log(img);
    if (img == "./public/image/eye.png") {
      $("#check").attr("src", "./public/image/EyeSlash.png");
    } else {
      $("#check").attr("src", "./public/image/eye.png");
    }
  }
});

$(document).ready(function() {
  generateCode(); // 生成初始的亂碼
});

function generateCode(){
  var num = Math.floor(Math.random() *10000)
  num = String(num).padStart(4, '0');
  $('#verification').text(num)
}

$('#reflash').click(()=>{
  generateCode()
})


$("#register").click((e) => {

  var password = $("#password").val()
  var checkeye = $("#checkeye").val()
  var cnumber = $('#cnumber').val()
  var verification = $('#verification').text()
  var ischeck = $('#checkbox').is(':checked')

  if (password != checkeye && cnumber != verification) {
    alert('請再次確認密碼及驗證碼是否正確')
    e.preventDefault()
  }else if(password != checkeye){
    alert('請再次確認密碼是否相同')
    e.preventDefault()
  }else if(cnumber != verification){
    alert('請確認驗證碼是否正確')
    e.preventDefault()
  }

  if(!ischeck){
    $('.register_from_checkbox_word').css('color','red')
    $('#terms').css('color','red')
    e.preventDefault()
  }

  // this.disabled = true
});


//彈窗js
$('#terms').click(()=>{
  $('#background').css('display', 'block')
})

$('#close-button').click(()=>{
  $('#background').css('display', 'none')
})