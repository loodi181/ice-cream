$(function() {
    $("input[name='horn-cup']").click(function() {
      if ($("#horn").is(":checked")) {
        $("#hornimg").show();
      } else {
        $("#hornimg").hide();
      }
    });
  });


  $(function() {
    $("input[name='horn-cup']").click(function() {
      if ($("#cup").is(":checked")) {
        $("#cupimg").show();
      } else {
        $("#cupimg").hide();
      }
    });
  });