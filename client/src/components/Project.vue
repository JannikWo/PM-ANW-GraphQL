<template>
  <div id="project">
    <h1>{{ String(project.name).toUpperCase() }}</h1>
    <button @click="newProject()">new</button>
    <div
      class="subproject"
      v-for="subproject in project.subprojects"
      :key="subproject.id"
    >
     
      <button @click="selectSubProject(subproject.id)">{{ subproject.name }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  setup(_, context) {
    function selectSubProject(subprojectID) {
      context.emit("changeRootProject", subprojectID);
    }
    function newProject() {
      context.emit("newProject");
    }
    return {
      selectSubProject,
      newProject
    };
  },
  components: {},
  props: {
    project: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style>
#project {
  margin: 20px;
  border-style: solid;
  border-radius: 10px;
  border-width: 1px;
  border-color: black;
}

.subproject {
  width: 30%;
  min-height: 100px;
  margin: 15px;
  float: left;
  border-style: solid;
  border-radius: 10px;
  border-width: 1px;
  border-color: black;
}
</style>
