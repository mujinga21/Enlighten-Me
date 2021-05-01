$(document).ready(() => {
  // DISPLAY PRICE QUESTION ---------------------------------------------------------------
  $(document).on("click", ".solo", (event) => {
    event.preventDefault();
    window.localStorage.setItem("soloOrSocial", "solo");
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
      redirectPage();
    }
  });

  // INPUT FOR SOCIAL API FETCH ---------------------------------------------------------------------
  $(document).on("click", ".social", (event) => {
    event.preventDefault();
    window.localStorage.setItem("soloOrSocial", "social");
    redirectPage();
  });

  // REDIRECTS TO ACTIVITIES PAGE -------------------------------------------------------------------
  redirectPage = () => {
    window.location = "/activities";
  };
});
