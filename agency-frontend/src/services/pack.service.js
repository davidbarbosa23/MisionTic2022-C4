import { apolloClient } from './apolloProvider';

import PackById from '@/graphql/PackById.gql';
import PackCreate from '@/graphql/PackCreate.gql';
import PackDelete from '@/graphql/PackDelete.gql';
import PackList from '@/graphql/PackList.gql';
import PackUpdate from '@/graphql/PackUpdate.gql';
import PackUpdateStatus from '@/graphql/PackUpdateStatus.gql';

class PackService {
  getPackList() {
    return apolloClient.query({
      query: PackList,
    });
  }

  getPackById(id) {
    return apolloClient.query({
      query: PackById,
      variables: {
        packId: id,
      },
    });
  }

  createPack({ isActive, ...pack }) {
    return apolloClient.mutate({
      mutation: PackCreate,
      variables: {
        packInput: pack,
      },
    });
  }

  updatePack({ _id, isActive, __typename, ...pack }) {
    return apolloClient.mutate({
      mutation: PackUpdate,
      variables: {
        packId: _id,
        packInput: pack,
      },
    });
  }

  updatePackStatus({ _id, status }) {
    return apolloClient.mutate({
      mutation: PackUpdateStatus,
      variables: {
        packId: _id,
        isActive: status,
      },
    });
  }

  deletePack(id) {
    return apolloClient.mutate({
      mutation: PackDelete,
      variables: {
        packId: id,
      },
    });
  }
}

export default new PackService();
