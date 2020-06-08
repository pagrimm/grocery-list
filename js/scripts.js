$(document).ready(function() {
  let inputList = []
  $("form#form1").submit(function(event) {
    event.preventDefault();
    inputList.push($("input#item").val());
    $("input#item").val("");
  });
  $("button#generate-list").click(function () {
    let outputList = []
    inputList.forEach(function(element) {
      outputList.push(element.toUpperCase());
    });
    outputList.sort();
    outputList.forEach(function(element) {
      $("ul.results-list").append("<li>"+ element + "</li>");
    });
    $("section.output").show();
    $("section.input").hide();
  });
});