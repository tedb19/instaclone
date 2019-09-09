const { GraphQLServer } = require("graphql-yoga")
const { prisma } = require("../prisma/generated/prisma-client")
const Query = require("./resolvers/Query")

const resolvers = {
  Query
}

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: request => ({
    ...request,
    prisma
  })
})

server
  .start(() => console.log(`server is running on http://localhost:4000`))
  .catch(err => console.error(`An error occured: ${err}`))
