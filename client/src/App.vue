<template>
  <v-app>
    <p>{{ hellow }} wrol</p>

    <Project :project="rootProject"></Project>
  </v-app>
</template>

<script>
//import {  } from "vue";
import Project from "./components/Project.vue";
import { useQuery, useResult } from "@vue/apollo-composable";
import { project, hello } from "./queries";
//import gql from "graphql-tag";
//import { ref, watch } from "@vue/composition-api";

export default {
  name: "App",
  setup() {
    function doQuery(query) {
      const { result, onError } = useQuery(query);
      onError((err) => {
        console.log("apollo query error:")
        console.log(err);
      });
      return result;
    }
    //const r = doQuery(project);

    // const hay = ref({ name: "asd" });
    // onResult(() => {
    //   console.log("HAY");
    //   hay.value = result;
    //   console.log(result.value);
    // });
    // //const hello = ref(result);
    // console.log("result");
    // console.log(result);
    // console.log(result2);
    // console.log(error2);

    // watch(result2.value, (value) => {
    //   console.log(value);
    // });
    console.log(hello)
    const rootProject = useResult(doQuery(project), { name: "root project" });
    const hellow = useResult(doQuery(hello), { hello: "hello darkness" });
  
    return {
      hellow,
      rootProject: rootProject, //{ name: "as" },
    };
  },
  components: {
    Project,
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
