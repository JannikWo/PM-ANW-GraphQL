import gql from "graphql-tag";

//export default function () {
// QUERY
const hello = gql`
{
    hello
}
`;

const project = gql`
query pr ($id: Int!) {
    ProjectByID: project(id: $id) {
        id
        name
        parentprojectID
        subprojects {
            id
            name
        }
    }
}
`;

const NEWID = gql`query newid {
    newid 
}`;

const NEWPROJECT = gql`
    mutation sendnewproject ($parentID: Int!) {
    CreateNewProject: newproject(parentID: $parentID) {
      id
    }
  }`
//   // Parameters
//   variables: {

//   },

export { hello, project, NEWID, NEWPROJECT }