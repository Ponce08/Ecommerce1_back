import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import userResolver from './resolvers/userResolver.js';
import userSchema from './schemas/useSchema.js';

export const typeDefs = mergeTypeDefs([userSchema]);
export const resolvers = mergeResolvers([userResolver]);
