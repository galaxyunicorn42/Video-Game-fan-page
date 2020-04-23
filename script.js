//when the user clicks on the qoute the color change//
$("p").click(function(){
  $("p").css("color","black")
});

$(".img1").click(function(){
$(".img1").hide();
$(".img2").show();
});
$(".img2").hide();


//when the user clicks the title it will change color//
$("h1").click(function(){
  $("h1").css("color", "red")
});

$(".button").click(function(){
  let message = $(".userInput").val();
  console.log(message)
});