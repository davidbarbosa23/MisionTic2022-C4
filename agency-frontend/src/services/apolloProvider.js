import VueApollo from 'vue-apollo';
import { ApolloClient } from 'apollo-client';
import { fromPromise, ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

import AuthRefresh from '@/graphql/AuthRefresh.gql';
import TokenService from './token.service';

let apolloClient;

// Refresh the token before bad request
const getNewToken = () => {
  return apolloClient
    .mutate({
      mutation: AuthRefresh,
      variables: { refresh: TokenService.getLocalRefreshToken() },
    })
    .then(({ data }) => {
      const { access } = data?.refresh;
      TokenService.updateLocalAccessToken(access);
      return access;
    });
};

// Handle UNAUTHENTICATED errors
const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
  if (graphQLErrors) {
    for (let err of graphQLErrors) {
      switch (err.extensions.code) {
        case 'UNAUTHENTICATED':
          return fromPromise(
            getNewToken().catch((error) => {
              TokenService.removeUser();
              window.location.href = '/ingreso';
              window.location.reload();
              return;
            })
          )
            .filter((value) => Boolean(value))
            .flatMap((access) => {
              const oldHeaders = operation.getContext().headers;
              // modify the operation context with a new token
              operation.setContext({
                headers: {
                  ...oldHeaders,
                  'x-token': access,
                },
              });

              // retry the request, returning the new observable
              return forward(operation);
            });
      }
    }
  }
});

// HTTP connection to the API
const httpLink = createHttpLink({
  uri: process.env.VUE_APP_API_URI,
});

// Set up the token access
const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    'x-token': TokenService.getLocalAccessToken() || '',
  },
}));

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
apolloClient = new ApolloClient({
  link: ApolloLink.from([authLink, errorLink, httpLink]),
  cache,
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache',
    },
  },
});

export { apolloClient };

export default new VueApollo({
  defaultClient: apolloClient,
});
