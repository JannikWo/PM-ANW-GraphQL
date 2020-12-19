<template>
  <v-app>
    <p>{{ hello }} wrol</p>
    <Project :project="rootProject"></Project>
  </v-app>
</template>

<script>
import Project from "./components/Project.vue";
import gql from "graphql-tag";

export default {
  name: "App",
  components: {
    Project,
  },
  data() {
    return {
      hello: "",
      rootProject: {name: "as"},
      error: null,
    };
  },
  mounted() {},
  apollo: {
    hello: {
      query: gql`query {
        projects {
          name
        }
      }
    `,

  }
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
