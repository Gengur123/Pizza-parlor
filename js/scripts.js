$(document).ready(function() {
  $("form#Q1").submit(function(){
    alert("You clicked a radio")
  });

  $('input[name="size"]').click(function(){
    let size = $('input[name="size"]:checked').val()
    if (size === "small") {
      alert("small pizza")
    }else if (size === "medium") {
      alert("medium pizza")
    }else {
      alert("large pizza")
    }
  });
});
