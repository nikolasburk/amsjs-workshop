const { GraphQLServer } = require('graphql-yoga')

const postData = [
  {
    id: 'post-0',
    title: '🇪🇺 Join us for GraphQL Europe',
    content: 'GraphQL Europe is happening on June 15 in Berlin!',
    published: false,
  },
]
let idCount = postData.length

const typeDefs = `
type Post {
  id: ID!
  title: String!
  content: String!
  published: Boolean!
}
type Query {
  info: String!
  posts: [Post!]!
}
`

const resolvers = {
  Query: {
    info: () => `This is the API for a simple blogging application.`,
    posts: () => {
      return postData
    },
  },
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
})
server.start(() =>
  console.log(`GraphQL server is running on http://localhost:4000`),
)
