const express = require("express");
const app = express();
const cors = require("cors");
const { createHandler } = require("graphql-http/lib/use/http");
const schema = require("./schema/schema");

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(
  "/graphql",
  createHandler({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => console.log("server running at port 4000"));
