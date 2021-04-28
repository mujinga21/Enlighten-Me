function getRandomActivity() {
    var randomNumber = Math.floor(Math.random() * activities.length);
    return activities[randomNumber];
}

var randomActivity = getRandomActivity();
displayActivityData(randomActivity);

function displayActivityData(activity) {
    console.log(activity);

    fetch(
        "http://www.boredapi.com/api/activity/"
    )
}