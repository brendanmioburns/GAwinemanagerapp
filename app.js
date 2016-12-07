$(document).ready(function() {

    $.ajax({
        type: "GET",
        // where you are making the GET request to
        url: "https://myapi.profstream.com/api/85ef9b/wines",

        // callback functions
        success: function(wine) {
            // for (var i = 0; i < wine.length; i++) {
            //     console.log(wine[i].name + " " + wine[i].year + " (" + wine[i].grapes + ") " + "of " + wine[i].region + ", " + wine[i].country + ": " + wine[i].description + " Price: $" + wine[i].price + "; " + "ID: #" + wine[i].id + ". " + "(Additional info: Created at: " + wine[i].created_at + "; " + "Updated at: " + wine[i].updated_at + "; " + "Image: " + wine[i].picture + "; " + "Instance ID: #" + wine[i].instance_id + ")." );

                HANDLE.renderTemplate({
                    templateSource: "#wine-template",
                    data: wine,
                    where: "#wine-container",
                    clearOriginal: true
                });
            },
        error: function() {
            alert("Uh oh!");
        }

    });
});
