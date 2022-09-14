import express from "express";
import cors from "cors";
import restaurants from "./api/restaurants.route.js";

/* Creating an instance of the express application. */
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1/restaurants", restaurants);
/* This is a catch-all route that will be used if no other route matches. It will return a 404 status
code and a JSON object with an error message. */
app.use("*", (req, res) => res.status(404).json({ error: "Not Found" }));

export default app;
