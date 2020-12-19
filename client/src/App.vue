<template>
  <v-app>
        <v-navigation-drawer
      absolute
      permanent
      top
    >
     <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Jane Smith</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
        </v-navigation-drawer>
    
    <p>{{hello}}  wrol</p>
<Project :project="rootProject"></Project>
  </v-app>
</template>

<script>

import Project from './components/Project.vue'
import gql from 'graphql-tag'

export default {
  name: 'App',
  components: {

    Project
  },
  data() {
    return {
      hello: '',
      rootProject: Object
    }
  },
  mounted () {
    
  },
  apollo: {
       hello: gql`query {
      hello
    }`,
    
  }
}
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
