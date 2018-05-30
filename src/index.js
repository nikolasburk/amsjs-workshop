const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')

const resolvers = {
  Query: {
    info: () => `This is the API for a simple blogging application.`,
    posts: (_, args, context, info) => {
      return context.db.query.posts(
        {
          where: {
            OR: [
              {
                title_contains: args.searchString,
              },
              {
                content_contains: args.searchString,
              },
            ],
          },
        },
        info,
      )
    },
    // post: (_, args, context, info) => {
    // },
  },
  // Mutation: {

  //   createDraft: (_, args, context, info) => {
  //   },
  //   publish: (_, args, context, info) => {
  //   },
  //   deletePost: (_, args, context, info) => {
  //   },
  // },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: './src/generated/prisma.graphql',
      endpoint: 'https://eu1.prisma.sh/nikolas-burk/prisma/dev',
      secret: 'mysecret123',
      debug: true,
    }),
  }),
})
server.start(() =>
  console.log(`GraphQL server is running on http://localhost:4000`),
)
