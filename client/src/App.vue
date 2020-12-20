<template>
  <v-app>
    <button @click="up()">up</button>
    <p>{{ hellow }} wrol</p>

    <Project
      :project="rootProject"
      @changeRootProject="changeRootProject"
      @newProject="newProject"
    ></Project>
  </v-app>
</template>

<script>
//import {  } from "vue";
import Project from "./components/Project.vue";
import { useQuery, useResult, useMutation } from "@vue/apollo-composable";
import { project, hello, NEWPROJECT } from "./queries";
import { ref } from "@vue/composition-api";
//import gql from "graphql-tag";
//import { ref, watch } from "@vue/composition-api";

export default {
  name: "App",
  setup() {
    const rootProjectID = ref({ id: 0 });

    function doQuery(query) {
      const { result, onError } = useQuery(query);
      onError((err) => {
        console.log("apollo query error:");
        console.log(err);
      });
      return result;
    }
    console.log(hello);
    //const {result, refetch: refetchRoot} = useQuery(project, rootProjectID);

    const { result, refetch: refetchRoot, onResult } = useQuery(
      project,
      rootProjectID
    );
    //const altResult = ref(result)
    const rootProject = useResult(result, {
      name: "root project",
    });

    onResult((res) => {
      console.log("updated root", res);
      //rootProject.value = 2
    });

    function updateRoot() {
      const { result } = useQuery(
        project,
        rootProjectID
      );
      //const altResult = ref(result)
      rootProject.value = useResult(result)
    }

    const hellow = useResult(doQuery(hello), { hello: "hello darkness" });
    const { mutate: sendNewproject } = useMutation(NEWPROJECT);
    //sendNewproject();
    //
    function changeRootProject(subprojectID) {
      //const rootProject = useResult(useQuery(project, { id: subprojectID }), {name: "new root project",});
      console.log("changeRootProject", subprojectID);
      rootProjectID.value = { id: subprojectID };
      console.log("IDRootProject", rootProjectID.value);
    }
    function up() {
      console.log("parentprojectID", rootProject.value.parentprojectID);
      rootProjectID.value = { id: rootProject.value.parentprojectID };
      refetchRoot();
      //updateRoot()
    }

    function newProject() {
      sendNewproject({ parentID: rootProjectID.value.id }).then((res) => {
        console.log("hhhh", res);
        rootProjectID.value = { id: res.data.CreateNewProject.id };
        //.then((response)=> {
        //console.log("ssd", response);
        //rootProject.value = response.data.project
        //})
      });
    }

    return {
      updateRoot,
      refetchRoot,
      newProject,
      up,
      rootProjectID,
      changeRootProject,
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
