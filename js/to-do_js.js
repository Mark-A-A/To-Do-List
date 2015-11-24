$(document).ready(function (){

  $(".check-button").on("click", function(){
    
    // add strikethrough css when checked off

  })


  $(".btn-success").on("click", function(){
    // append row to the table
    var addText = $("#task").val();
    var checkBox = "<input type=\"checkbox\" aria-label=\"...\">"; 
    var deleteButton = "<button type=\"button\" class=\"btn btn-danger\">Delete</button>";
    
    $('tbody').append("<tr><td class='text-center'>" + checkBox + "</td><td class='text-center'>"+addText+"</td><td class='text-center'>"+deleteButton+"</td></tr>");
    alert("Adding Row");
  })

  $(document).on("click", ".btn-danger", function(){
    alert("Deleting Row");
  })




});