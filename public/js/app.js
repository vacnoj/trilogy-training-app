$(function() {
    console.log('app.js loaded')
    $("#complete").on("click", function(event) {
        var moduleName = $(this).attr("data-name");
        var moduleHolder = {
            name: moduleName
        }
        console.log(moduleName)
        console.log("test")
        $.ajax("/submitTrilogy", {
            type: "Put",
            data: moduleHolder
          }).then(
            function() {
              console.log("changed sleep to");
              // Reload the page to get the updated list
            //   location.reload();
            }
          );
    })
})

