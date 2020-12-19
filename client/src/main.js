import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'



const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: 'http://localhost:4000/graphql'
})
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  apolloProvider,
  render: h => h(App),
}).$mount('#app')

Vue.use(VueApollo)