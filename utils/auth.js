const hb = require("handlebars");
const moment = require("moment");

hb.registerHelper("dateFormat", (date, options) => {
  const formatToUse =
    (arguments[1] && arguments[1].hash && arguments[1].hash.format) || "LLLL";
  return moment(date).format(formatToUse);
});

const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route
  if (!req.session.logged_in) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;
