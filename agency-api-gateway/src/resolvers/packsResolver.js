import { ForbiddenError } from 'apollo-server';

export default {
  Query: {
    pack: (_, { packId }, { dataSources }) => dataSources.packsAPI.getById(packId),
    packs: (_, __, { dataSources }) => dataSources.packsAPI.getPacks(),
  },
  Mutation: {
    createPack: (_, { packInput }, { dataSources, user }) => {
      if (user?.is_admin) return dataSources.packsAPI.create(packInput);
      throw new ForbiddenError('User not able to perform this request');
    },
    updatePack: (_, { packId, packInput }, { dataSources, user }) => {
      if (user?.is_admin) return dataSources.packsAPI.update(packId, packInput);
      throw new ForbiddenError('User not able to perform this request');
    },
    updatePackStatus: (_, { packId, isActive }, { dataSources, user }) => {
      if (user?.is_admin) return dataSources.packsAPI.updateStatus(packId, isActive);
      throw new ForbiddenError('User not able to perform this request');
    },
    deletePack: (_, { packId }, { dataSources, user }) => {
      if (user?.is_admin) return dataSources.packsAPI.delete(packId);
      throw new ForbiddenError('User not able to perform this request');
    },
  },
};
