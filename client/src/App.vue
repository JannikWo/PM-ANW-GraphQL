<template>
  <v-app>
    <p>{{ hellos.hello }} wrol</p>
    <!-- <Project :project="rootProject"></Project> -->
    <ApolloQuery
    query="gql => gql`
      query MyHelloQuery {
        hello
      }
    `"
  >
    <!-- TODO -->
  </ApolloQuery>
  </v-app>
</template>

<script>
//import { ref } from "vue";
//import Project from "./components/Project.vue";
import { useQuery } from "@vue/apollo-composable";
import { project } from "./queries"
// import gql from "graphql-tag";

// //export default function () {
// // QUERY
// const project = gql`
// {
//     hello
// }
// `;

export default {
  name: "App",
  setup() {
    const { result, loading, error } = useQuery(project);
    //const hello = ref(result);
    console.log("result")
    console.log(result)
    return {
      hellos: result,
      loading,
      error,
      rootProject: {name: "asd"}
    };
  },
  components: {
    //Project,
  },

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
