import { apolloClient } from './apolloProvider';

import UserById from '@/graphql/UserById.gql';
import UserList from '@/graphql/UserList.gql';

class UserService {
  getUserList() {
    return apolloClient.query({
      query: UserList,
    });
  }
  getUserById(id) {
    return apolloClient.query({
      query: UserById,
      variables: {
        userId: id,
      },
    });
  }
}

export default new UserService();
