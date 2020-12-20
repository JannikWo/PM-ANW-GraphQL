<template>
  <v-app>
    <p>{{ hello }} wrol</p>
    <p>{{ result }} wrol</p>
    <p>{{ loading }} wrol</p>
    <p>{{ error }} wrol</p>
    <Project :project="rootProject"></Project>
  </v-app>
</template>

<script>
import Project from "./components/Project.vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

// QUERY
const HELLO = gql`{
    projects {
      id
    }
  }`;
  console.log(HELLO);

export default {
  name: "App",
  setup() {
    try {
    const { result, loading, error } = useQuery(HELLO);
    
    return {
      result,
      loading,
      error,
    };
    } catch (e) {
      console.log(e);
    }
  },
  components: {
    Project,
  },
  data() {
    return {
      hello: "",
      rootProject: { name: "as" },
      error: null,
    };
  },
  mounted() {},
  apollo: {
    hello: {
      query: gql`{hello}`
      }
  },
  created () {
    console.log("hello");
    console.log(this.hello);
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
