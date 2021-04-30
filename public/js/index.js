
$(document).ready(() => {
    // VARIABLES -----------------------------------------------------------------------
    var requestURL = "http://www.boredapi.com/api/activity?";
    var socialURL = "http://www.boredapi.com/api/activity?participants=2";

  // ARRAYS --------------------------------------------------------------------------
  var activitiesData = [];
  

  // API bored fetch to get solo data
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
                    redirectPage();
                } else {
                    getAPI();
                }
            });
        };
    };

    // API bored fetch to get social data
    getSocialAPI = () => {
        for (var i = 0; i < 3; i++) {
            fetch(socialURL)
            .then(function (response) {
                console.log(response);
                return response.json();
              })
              .then(function (data) {
                  activitiesData.push(data);
                  console.log(activitiesData);
                  if (i <= 3) {
                      redirectPage();
                  } else {
                      getSocialAPI();
                  }
              });
          };
    };
    
    
    // DISPLAY PRICE QUESTION ---------------------------------------------------------------
    $(document).on("click", ".solo", (event) => {
        event.preventDefault();
        $(".img-container").addClass("hide");
        $(".img-container").addClass("hide");
        $("#priceForm").removeClass("hide");
    });
    
    
    // PRICE INPUT FOR SOLO API FETCH ---------------------------------------------------------------
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
    });

    // INPUT FOR SOCIAL API FETCH ---------------------------------------------------------------------
    $(document).on("click", ".social", (event) => {
        event.preventDefault();
        getSocialAPI();
    });

    // REDIRECTS TO ACTIVITIES PAGE -------------------------------------------------------------------
    redirectPage = () => {
        window.location = "/activities";
    };

    // DISPLAY ACTIVITIES TO PAGE

});
