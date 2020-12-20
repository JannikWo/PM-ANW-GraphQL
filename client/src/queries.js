import gql from "graphql-tag";

//export default function () {
// QUERY
const hello = gql`
{
    hello
}
`;

const project = gql`
query pr {
    ProjectByID: project(id: 0) {
        name
        subprojects {
            id
            name
        }
    }
}
`;

export {hello, project}
// #   query project {
//     #     project(id: 1) {
//     #         name
//     #     }
//     #   }

//return {project}

//}

//export {project}
