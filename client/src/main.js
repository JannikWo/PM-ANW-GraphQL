import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'
//import { onError } from "apollo-link-error";
//import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { provide } from '@vue/composition-api'
import { DefaultApolloClient } from '@vue/apollo-composable'
//import { ApolloLink } from 'apollo-link';
//import { createHttpLink } from 'apollo-link-http';

// const errorLink = onError(({ graphQLErrors, networkError }) => {
//   if (graphQLErrors) {
//     console.log('graphQLErrors', graphQLErrors);
//   }
//   if (networkError) {
//     console.log('networkError', networkError);
//   } else {
//     console.log('TYPEERROR');
//   }
// });

//const httpLink = "http://localhost:4000/graphql";

//const link = ApolloLink.from([errorLink, httpLink]);
//console.log(link);

// GRAPHQL STUFF
//import VueCompositionApi, { provide } from '@vue/composition-api'

// // client apollo client
// const apolloClient = new ApolloClient({
//   connectToDevTools: true,
//     //uri: "http://localhost:4000/graphql",
//     //link: link,
//     link:  createHttpLink({ uri: "http://localhost:4000/graphql"}),
//     fetchOptions: {
//       mode: 'no-cors',
//     },
//     onError: ({ networkError, graphQLErrors }) => {
//       console.log('graphQLErrors', graphQLErrors)
//       console.log('networkError', networkError)
//     }
// })




// const httpLink = new HttpLink({
//   uri: 'http://localhost:4000/graphql'
// })

// // Error Handling
// const errorLink = onError(({ graphQLErrors, networkError }) => {
//   if (graphQLErrors)
//       graphQLErrors.map(({ message, locations, path }) =>
//           console.log(
//               `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
//           )
//       )
//   if (networkError) console.log(`[Network error]: ${networkError}`)
// })



const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  //link: errorLink.concat(httpLink),
  cache: new InMemoryCache(),
    connectToDevTools: true
})
// const apolloProvider = new VueApollo({
//   defaultClient: apolloClient,
// })

//DefaultApolloClient.link = errorLink.concat(httpLink);

Vue.config.productionTip = false
Vue.use(VueApollo)

new Vue({
  vuetify,
   setup () {
     provide(DefaultApolloClient, apolloClient)
   },
  //provideApolloClient(apolloProvider),
  //apolloProvider,
  fetchOptions: {
    mode: 'no-cors',
  },
  render: h => h(App),
}).$mount('#app')


