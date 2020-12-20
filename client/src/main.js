import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'


//import { InMemoryCache } from 'apollo-cache-inmemory'
import { provide } from '@vue/composition-api'
import { DefaultApolloClient } from '@vue/apollo-composable'
import VueCompositionAPI from '@vue/composition-api'



const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  //cache: new InMemoryCache(),
    connectToDevTools: true
})

Vue.config.productionTip = false
Vue.use(VueCompositionAPI)
Vue.use(VueApollo)

new Vue({
  vuetify,
   setup () {
     provide(DefaultApolloClient, apolloClient)
   },

  fetchOptions: {
    mode: 'no-cors',
  },
  render: h => h(App),
}).$mount('#app')


