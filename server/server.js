var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
var data = require('./data.json');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
    projects: [project]
    project(id: Int!): project
  }

  type project {
    id: Int
    name: String
    description: String
  }
`);
 
// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
  projects: () => {
    return data.projects;
  },
  project: (args) => {
    return data.projects.find(project => {
      return project.id == args.id;
    });
  }
};
 
var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');
console.log(data);