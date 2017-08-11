$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var client              = $("input#client").val();
    var bookingDescription  = $("input#bookingDescription").val();
    var date                = $("input#date").val();
    var startTime           = $("input#startTime").val();
    var endTime             = $("input#endTime").val();

    $(".client").text(client);
    $(".date").text(date);
    $(".startTime").text(startTime);
    $(".endTime").text(endTime);

    $("#confirm").show();

    event.preventDefault();
  });
});
