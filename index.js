const { ApolloServer } = require("apollo-server");
const SessionAPI = require("./datasources/sessions.js");
const SpeakerAPI = require("./datasources/speakers");
const typeDefs = require("./schema.js");
const resolvers = require("./resolvers.js");

const dataSources = () => {
  return {
    SessionAPI: new SessionAPI(),
    SpeakerAPI: new SpeakerAPI(),
  };
};

const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`graphql running at ${url}`);
});
