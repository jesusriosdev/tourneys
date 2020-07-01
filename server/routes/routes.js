// load up our shiny new route for teams
const teamRoutes = require("./teams");
const tourneyRoutes = require("./tourneys");

const appRouter = (app, fs) => {
  // we've added in a default route here that handles empty routes
  // at the base API url
  app.get("/", (req, res) => {
    res.send("Welcome to the Tourneys App api-server");
  });

  // run our user route module here to complete the wire up
  teamRoutes(app, fs);
  tourneyRoutes(app, fs);
};

// this line is unchanged
module.exports = appRouter;