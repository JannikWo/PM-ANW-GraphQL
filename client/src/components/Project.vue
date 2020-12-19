<template>
  <div id="project">
    <h1>{{project.name}}</h1>
  </div>
</template>

<script>

export default {
  name: 'Project',
  components: {
    
  }, 
  props: {
    project: {
      type: Object,
      default: null
    },
  },
}
</script>

<style>
#project {

}
</style>
