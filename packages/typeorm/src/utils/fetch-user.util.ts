// 3p
import { Class } from '@foal/core';
import { getRepository } from 'typeorm';

/**
 * Create a function that finds the first entity that matches some id.
 *
 * It returns undefined if no entity can be found.
 *
 * This function is usually used by:
 * - TokenRequired (@foal/core)
 * - TokenOptional (@foal/core)
 * - JWTRequired (@foal/jwt)
 * - JWTOptional (@foal/jwt)
 *
 * @export
 * @param {(Class<{ id: number|string|ObjectID }>)} userEntityClass - The entity class.
 * @returns {((id: number|string|ObjectID) => Promise<any>)} The returned function expecting an id.
 */
export function fetchUser(userEntityClass: Class<{ id: number|string|ObjectID }>): (id: number|string|ObjectID) => Promise<any> {
  return (id: number|string|ObjectID) => getRepository(userEntityClass).findOne({ id });
}
