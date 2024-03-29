import { GraphQLServer } from 'graphql-yoga'
import { prisma } from './generated/prisma-client'
import resolvers from './resolvers'

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => ({
    ...request,
    prisma
  })
})

const options = {
  port: 8000,
  endpoint: '/graphql',
  tracing: true,
  debug: process.env.NODE_ENV === 'dev'
}

server.start(options, ({ port }) =>
  console.log(`Server started @ http://localhost:${port}/graphql`)
)
