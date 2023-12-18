import express from "express";
import cors from "cors";
import appConfig from "./2-utils/app-config";
import catchAll from "./3-middleware/catch-all";
import routeNotFound from "./3-middleware/route-not-found";
import productsController from "./6-controllers/products-controller";

const server = express();

server.use(cors()); // Allow any site to access our backend
// server.use(cors({ origin: "http://localhost:3000" })); // Allow only this site to access our backend
// server.use(cors({ origin: ["http://localhost:3000", "http://some-other.com"] })); // Allow only those sites to access our backend

server.use(express.json()); // creates request.body object if exists
server.use("/api", productsController);
server.use("*", routeNotFound);
server.use(catchAll);

server.listen(appConfig.port, () => console.log(`Listening on http://localhost:${appConfig.port}`));

