const { ApolloServer, gql } = require("apollo-server");
const SessionAPI = require("./datasources/sessions.js");

const typeDefs = gql`
  type Query {
    sessions: [Session]
  }
  type Session {
    id: ID!
    title: String!
    description: String
    startsAt: String
    endsAt: String
    room: String
    day: String
    format: String
    track: String @deprecated(reason: "switching to tag based model")
    level: String
  }
`;

const resolvers = {
  Query: {
    sessions: (parent, args, { dataSources }, info) => {
      return dataSources.SessionAPI.getSessions();
    },
  },
};

const dataSources = () => ({
  sessionsAPI: new SessionAPI(),
});
const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`graphql running at ${url}`);
});
