var { buildSchema } = require('graphql');
var data = require('./data.json');
import {allprojects} from "./server"


var schema = buildSchema(`
  type Query {
    hello: String
    projects: [Project]
    project(id: Int!): Project
    newid: Int!
  }

  type Mutation {
    newproject(parentID: Int!): Project
  }

  type User {
    id: Int
    name: String
    mail: String
    projects: [Project]
  }

  type Project {
    id: Int!
    name: String
    description: String
    tags: [String]
    parentprojectID: Int!
    subprojects: [Project]
  }


  
`);

class Project {
    constructor(id, name, description, tags, parentprojectID) {
        this.id = id
        this.name = name
        this.description = description
        this.tags = tags
        this.parentprojectID = parentprojectID
    }

    subprojects() {
        return allprojects.filter(p => {
            return (p.parentprojectID == this.id)
        })
    }


}

module.exports = { schema, Project };