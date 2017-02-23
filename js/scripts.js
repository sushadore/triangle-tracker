$(function() {
  $("form#triangle").submit(function() {
    event.preventDefault();
    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());

    if (side1 === side2 && side2 === side3) {
      $("#output").text("Equilateral");
    } else if (side1 === side2 && side1 !== side3) {
      $("#output").text("Isoscolese");
    } else if (side1 !== side2 && side2!==side3 && side1 !==side3) {
      $("#output").text("Scalene");
    }
  });
});
