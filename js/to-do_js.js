$(document).ready(function (){

  $(".check-button").on("click", function(){
    alert("Crossing It Out");
  })


  $(".btn-success").on("click", function(){
    alert("Adding Row");
  })

  $(document).on("click", ".btn-danger", function(){
    alert("Deleting Row");
  })




});