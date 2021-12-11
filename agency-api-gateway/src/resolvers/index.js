import lodash from 'lodash';

import authUsersResolver from './authUsersResolver.js';
import packsResolver from './packsResolver.js';
import purchasesResolver from './purchasesResolver.js';

export default lodash.merge(authUsersResolver, packsResolver, purchasesResolver);
