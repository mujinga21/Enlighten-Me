$(document).ready(() => {
  // VARIABLES -----------------------------------------------------------------------
  var requestURL = "http://www.boredapi.com/api/activity?"

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
                if (i <= 3) {
                    return;
                } else {
                    getAPI();
                }
            });
        };
    }
    
    
    // DISPLAY PRICE QUESTION ---------------------------------------------------------------
    $(document).on("click", ".solo", (event) => {
        event.preventDefault();
        $(".img-container").addClass("hide");
        $(".img-container").addClass("hide");
        $("#priceForm").removeClass("hide");
    });
    
    
    // PRICE INPUT FOR API FETCH ---------------------------------------------------------------
    $(document).on("click", "#priceBtn", (event) => {
        event.preventDefault();
        var priceInput = $("#price").val();
        console.log(priceInput);
        if (priceInput !== "y" && priceInput !== "n"){
            alert("Invalid response please type y/n");
            return;
        } else {
            getAPI();
        }
    })
    
    

});
