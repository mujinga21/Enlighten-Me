function getAPI () {
    var requestURL = 'http://www.boredapi.com/api/activity/' ;

    fetch(requestURL)
    .then(function (response) { 
        console.log(response)
      return response.json();
    })
    .then(function (data) {
        console.log(data)
    })

}



getAPI() 