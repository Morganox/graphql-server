// The reference implementation of the GraphQL specification, 
// designed for running GraphQL in a Node.js environment.

var { graphql, buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = { hello: () => 'Hello world!' };

graphql(schema, '{ hello }', root).then((response) => {
	console.log(response);
});