import { apolloClient } from './apolloProvider';
import TokenService from './token.service';

import AuthLogin from '@/graphql/AuthLogin.gql';
import AuthRegister from '@/graphql/AuthRegister.gql';

class AuthService {
  async login({ username, password }) {
    const { data } = await apolloClient.mutate({
      mutation: AuthLogin,
      variables: {
        credentials: {
          username,
          password,
        },
      },
    });
    const { login } = data;
    const { refresh, access } = login;
    if (refresh && access) TokenService.setUser(login);
    return login;
  }

  logout() {
    TokenService.removeUser();
  }

  register(user = {}) {
    return apolloClient.mutate({
      mutation: AuthRegister,
      variables: {
        userInput: user,
      },
    });
  }
}

export default new AuthService();
