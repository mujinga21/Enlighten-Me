$(document).ready(() => {
  // VARIABLES -----------------------------------------------------------------------
  var requestURL = "http://www.boredapi.com/api/activity?";


  // ARRAYS --------------------------------------------------------------------------
  var activitiesData = [];
  

  // API bored fetch to get data
  function getAPI() {
      for (var i = 0; i < 3; i++) {
          fetch(requestURL)
          .then(function (response) {
              console.log(response);
              return response.json();
            })
            .then(function (data) {
                activitiesData.push(data);
                console.log(activitiesData);
            });
        };
    }
    
    getAPI();

    // DISPLAY PRICE QUESTION ---------------------------------------------------------------
    $(document).on("click", ".solo", (event) => {
        event.preventDefault();
        $(".img-container").addClass("hide");
        $(".img-container").addClass("hide");
        $("#priceForm").removeClass("hide");
        return;
    });

    
});
