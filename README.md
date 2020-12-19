# PM-ANW-Modul Project: GraphQL

## Introduction
General Idea: only send the subset of data which are of interest for the client.

## Example: my-project-organization
Idea: build an project organization website. Projects are organized as a tree, the root project is "life". Any project can contain subprojects and has one parentproject (except "life"). There also tags available.

### Server
### Client

## Implementation
### Queries

graphische Dartstellung der Asuwahl durch einen query, verschiedene mglkeiten darstellen
```
project {
    name
    description
    subprojects: [
        {
            name: 
            description
        }
    ]

}
```

### Mutations


### Authentication