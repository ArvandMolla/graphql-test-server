const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Query {
    hello: String
    goodBye: String
  }
`);

const root = {
  hello: () => "helloooo world",
  goodBye: () => {
    return "goodBye world!";
  },
};

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(5000, () => console.log("Server is running on port 5000"));
