import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'
import { onError } from "apollo-link-error";
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'


const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql'
})

// Error Handling
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
          console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
      )
  if (networkError) console.log(`[Network error]: ${networkError}`)
})



const apolloClient = new ApolloClient({
  link: errorLink.concat(httpLink),
  cache: new InMemoryCache(),
    connectToDevTools: true
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