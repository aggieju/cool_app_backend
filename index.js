const express = require("express");
const corsMiddleWare = require("cors");
const authRouter = require("./routers/auth");
const useRouterSpace = require("./routers/space");

const { PORT } = require("./config/constants");

// Create an express app
const app = express();

/**
 * Middlewares
 *
 * It is advisable to configure your middleware before configuring the routes
 * If you configure routes before the middleware, these routes will not use them
 *
 */

// CORS middleware:  * Since our api is hosted on a different domain than our client
// we are are doing "Cross Origin Resource Sharing" (cors)
// Cross origin resource sharing is disabled by express by default
app.use(corsMiddleWare());

// express.json():be able to read request bodies of JSON requests a.k.a. body-parser
app.use(express.json());

/**
 * Routes
 *
 * Define your routes and attach our routers here (now that middlewares are configured)
 */

app.use("/auth", authRouter);
app.use(useRouterSpace);



//start listening
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});