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

var remember = $("#la").is(":checked");
// var account = $("#account").val();
// var password = $("#password").val();

var account = document.getElementById("account").value;
var password = document.getElementById("password").value;

$("#log").click((e) => {
  console.log(typeof account);
  console.log(typeof password);
  console.log(account);
  console.log(password);
  e.preventDefault();
  //   if (remember) {
  //     localStorage.setItem("useraccount", account);
  //     localStorage.setItem("userpassword", password);
  //   }
});

// $(document).ready(() => {
//   var storedUseraccount = localStorage.getItem("useraccount");
//   var storedUserpassword = localStorage.getItem("userpassword");

//   if (storedUseraccount && storedUserpassword) {
//     $("#account").val(storedUseraccount);
//     $("#password").val(storedUserpassword);
//   }
// });
