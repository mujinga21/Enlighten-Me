// $(document).ready(() =>{
// var titles = JSON.parse(localStorage.getItem("titles"));
// // $(".activeOne").append(titles[1])
// console.log(titles)

// })

// VARIABLES
var firstActivity = document.getElementById("activityOne");
var secondActivity = document.getElementById("activityTwo");
var thirdActivity = document.getElementById("activityThree");

var socialURL =
  "http://www.boredapi.com/api/activity?participants=2&participants=3&participants=4&participants=5&participants=6";

// ARRAYS
var activitiesData = [];

// DISPLAY ACTIVITIES TO PAGE
var activityPrice = localStorage.getItem("paidActivities");
var soloOrSocial = localStorage.getItem("soloOrSocial");

// API bored fetch to get solo/free data
function getSoloAPI() {
  for (var i = 0; i < 3; i++) {
    if (activityPrice == "y") {
      var soloURL =
        "http://www.boredapi.com/api/activity?participants=1&price=0.0";
    } else {
      soloURL =
        "http://www.boredapi.com/api/activity?participants=1&minprice=0.01&maxprice=0.1";
    }
    fetch(soloURL)
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (data) {
        activitiesData.push(data);
        // window.localStorage.setItem("titles", JSON.stringify(activitiesData));
        console.log(activitiesData);

        firstActivity.innerText = activitiesData[0].activity;
        secondActivity.innerText = activitiesData[1].activity;
        thirdActivity.innerText = activitiesData[2].activity;
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
        // window.localStorage.setItem("titles", JSON.stringify(activitiesData));
        firstActivity.innerText = activitiesData[0].activity;
        secondActivity.innerText = activitiesData[1].activity;
        thirdActivity.innerText = activitiesData[2].activity;
      });
  }
};

if (soloOrSocial === "solo") {
  getSoloAPI();
} else if (soloOrSocial === "social") {
  getSocialAPI();
}
