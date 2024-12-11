import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import userResolver from './resolvers/userResolver.js';
import userSchema from './schemas/useSchema.js';
import productsResolver from './resolvers/productsResolver.js';
import productsSchema from './schemas/productsSchema.js';

export const typeDefs = mergeTypeDefs([userSchema, productsSchema]);
export const resolvers = mergeResolvers([userResolver, productsResolver]);
