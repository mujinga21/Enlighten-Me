$(document).ready(() => {
  // VARIABLES -----------------------------------------------------------------------
  var requestURL = "http://www.boredapi.com/api/activity?participants=4";
  var participants = 1;
  var price = 0;


  // ARRAYS --------------------------------------------------------------------------
  var activitiesData = [];


  // API bored fetch to get data
  function getAPI() {
      if (price == "yes") {
        requestURL = "http://www.boredapi.com/api/activity?participants=1&price=0.0";
      } else if (price == "no") {
        requestURL = "http://www.boredapi.com/api/activity?participants=1";
      } else {
        requestURL = "http://www.boredapi.com/api/activity?participants=" +
        participants;
      }
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

    
});
