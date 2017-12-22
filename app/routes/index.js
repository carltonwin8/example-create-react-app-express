const noteRoutes = require("./note-routes");
const apiRoutes = require("./api-routes");

module.exports = function(app, db) {
  noteRoutes(app, db);
  apiRoutes(app, db);
};
