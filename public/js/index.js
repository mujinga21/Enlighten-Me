$(document).ready(() => {
  // VARIABLES -----------------------------------------------------------------------
  var socialURL =
    "http://www.boredapi.com/api/activity?participants=2&participants=3&participants=4&participants=5&participants=6";

  // ARRAYS --------------------------------------------------------------------------
  var activitiesData = [];

  // API bored fetch to get solo/free data
  function getFreeSoloAPI() {
    for (var i = 0; i < 3; i++) {
      if (activityPrice === "y") {
        var soloURL =
          "http://www.boredapi.com/api/activity?participants=1&price=0.0";
      } else {
        soloURL = "http://www.boredapi.com/api/activity?participants=1";
      }
      fetch(soloURL)
        .then(function (response) {
          console.log(response);
          return response.json();
        })
        .then(function (data) {
          activitiesData.push(data.activity);
          console.log(activitiesData);
          window.localStorage.setItem("titles", JSON.stringify(activitiesData));
        });
    }
  }

  // API bored fetch to get solo/paid data
  function getPaidSoloAPI() {
    for (var i = 0; i < 3; i++) {
      fetch(soloPaidURL)
        .then(function (response) {
          console.log(response);
          return response.json();
        })
        .then(function (data) {
          activitiesData.push(data);
          console.log(activitiesData);
          //   if (i <= 3) {
          //     redirectPage();
          //   } else {
          //     getAPI();
          //   }
        });
    }
  }

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
    }
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
    window.localStorage.setItem("paidActivities", priceInput);
    if (priceInput !== "y" && priceInput !== "n") {
      alert("Invalid response please type y/n");
      return;
    } else {
      //   redirectPage();
      getFreeSoloAPI();
    }
  });

  // INPUT FOR SOCIAL API FETCH ---------------------------------------------------------------------
  $(document).on("click", ".social", (event) => {
    event.preventDefault();
    getSocialAPI();
  });

  // REDIRECTS TO ACTIVITIES PAGE -------------------------------------------------------------------
  redirectPage = () => {
    titles = JSON.parse(localStorage.getItem("titles"));
    console.log(titles);
    window.location = "/activities";
  };

  // DISPLAY ACTIVITIES TO PAGE
  var activityPrice = localStorage.getItem("paidActivities");
  console.log(activityPrice);

  //   renderSoloActivities = () => {
  //     if (activityPrice === "y") {
  //       getFreeSoloAPI();
  //       console.log(activitiesData);
  //     } else {
  //       getPaidSoloAPI();
  //       console.log(activitiesData);
  //     }
  //   };
});
