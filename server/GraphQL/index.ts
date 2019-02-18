import "reflect-metadata";
import * as express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema, formatArgumentValidationError } from "type-graphql"
import { createConnection } from "typeorm";
import { RegesterResolver } from "./modules/user/Register";

const main = async () => {
  await createConnection().catch(err => console.error(err));

  const schema = await buildSchema({
    resolvers: [RegesterResolver],
  })

  const app = express.default();
  const apolloServer = new ApolloServer({ schema, formatError: formatArgumentValidationError });

  apolloServer.applyMiddleware({ app });

  app.listen(8080, '0.0.0.0', () => {
    console.log("GraphQL Server Started...");
  });
}

main();
