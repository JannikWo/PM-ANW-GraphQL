var express = require('express');
const cors = require('cors')
var { graphqlHTTP } = require('express-graphql');
var data = require('./data.json');
const { schema, Project } = require('./schema');
const { Sequelize, DataTypes, Model } = require('sequelize');

// CONNECTION TO MYSQL
const sequelize = new Sequelize('projects', 'root', '12341234', {
  host: 'localhost',
  dialect:  'mysql'
});

const projectDB = sequelize.define('project', {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  description: {
    type: DataTypes.STRING
  },
  parentprojectID: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  tags: {
    type: DataTypes.JSON,
    allowNull: false
  }

}, {
  // Other model options go here
});

async function testseq() {
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
try {
  await projectDB.sync();
  console.log("The table for the User model was just (re)created!");
} catch (error) {
  console.log("Sync Error sequelizer for projects table ", error);
}

}

testseq();




//type subproject
// The root provides a resolver function for each API endpoint
var allprojects = [];

data.projects.forEach(p => {
  allprojects.push(new Project(p.id, p.name, p.description, p.tags, p.parentprojectID));
});






var root = {
  hello: () => {
    return 'Hello world!';
  },
  projects: () => {
    return allprojects; //[new Project()]; 
  },
  project: ({ id }) => {
    return allprojects.find(project => {
      return project.id == id;
    });
  },
  newid: () => {
    return allprojects.reduce((prev, current) => (prev.id > current.id) ? prev : current).id;
  },
  newproject: ({parentID}) => {
    const nid = allprojects.reduce((prev, current) => (prev.id > current.id) ? prev : current).id + 1;
    const np = new Project(nid, "neues Projekt", "grat descr", ["nice"], parentID)
    allprojects.push(np);
    console.log(allprojects)
    return np;
  }

};

var app = express();

//important order
app.use(cors()) // FIRST!
app.use('/graphql', graphqlHTTP({// SECOND!
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');