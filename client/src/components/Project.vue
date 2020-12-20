<template>
  <div id="project">
    <h1>{{ String(project.name).toUpperCase() }}</h1>
    <div v-for="subproject in project.subprojects" :key="subproject.id">
      
        <p>{{ subproject.name }}</p>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
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
</style>
