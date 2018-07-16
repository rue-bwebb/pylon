import joinMonster from 'join-monster';
import joinMonsterAdapt from 'join-monster-graphql-tools-adapter';
import mysql from 'data/dao/joinMonster/dialects/mysql';

import ruecommerce from 'data/services/ruecommerce';
import ruecommerceMappings from 'data/dao/joinMonster/mappings/ruecommerce';
import schema from 'api/graphql';

let ruecommerceResolverInstance = null;

/**
 * [createRuecommerceResolver description]
 * @return {[type]} [description]
 */
export function createRuecommerceResolver() {

  if (!ruecommerceResolverInstance) {
    // Join Monster applies the mappings to the generated JS AST schema as a
    // side effect (boo - not purely functional :( )
    joinMonsterAdapt(schema, ruecommerceMappings);

    /**
     * [ruecommerceJoinMonster description]
     * @param  {[type]} resolveInfo [description]
     * @param  {[type]} ctx         [description]
     * @return {[type]}             [description]
     */
    ruecommerceResolverInstance = function ruecommerceResolver(ctx, resolveInfo) {
      return joinMonster(resolveInfo, ctx, async (sql) => {
        const result = await ruecommerce.raw(sql);
        return result[0];
      }, { dialectModule: mysql });
    };
  }

  return ruecommerceResolverInstance;
};
