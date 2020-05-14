reverseCoord = function () {
    $("#output").html("M ");

    var input = $("#textInput").val();
    var coordPair = /\d+\.\d\d,\d+\.\d\d/g;
    var found = input.match(coordPair);

    console.log(found.length);

    $("#output").append(found.pop() + "<br/>C ");
    var counter = 0;

    while (found.length > 0) {
        $("#output").append(found.pop() + " ");
        counter++;
        if (counter % 3 == 0) {
            $("#output").append("<br/>");
        }
    }
}

$("#reverseButton").click(reverseCoord);