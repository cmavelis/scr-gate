import pick from 'lodash/pick';

/**
 * Removes fields with an 'id' field that equals ''.
 * This function was created to prevent entities to be sent to
 * the server with relationship fields with an empty id and thus
 * resulting in a 500.
 *
 * @param entity Object to clean.
 */
export const cleanEntity = entity => {
  const keysToKeep = Object.keys(entity).filter(k => !(entity[k] instanceof Object) || (entity[k]['id'] !== '' && entity[k]['id'] !== -1));
  return pick(entity, keysToKeep);
};

export const cleanParentEntity = entity => {
  const alteredEntity = {};
  const keysToKeep = Object.keys(entity).map(k => {
        if ((entity[k] instanceof Object) && (entity[k]['id'] !== '' && entity[k]['id'] !== -1)) {
          alteredEntity[`${k}Id`] = entity[k]['id'];
        }
        if (!(entity[k] instanceof Object) || (entity[k]['id'] !== '' && entity[k]['id'] !== -1)) {
          return k;
        }
      });

  return Object.assign(pick(entity, keysToKeep), alteredEntity);
};

/**
 * Simply map a list of element to a list a object with the element as id.
 *
 * @param idList Elements to map.
 * @returns The list of objects with mapped ids.
 */
export const mapIdList = (idList: ReadonlyArray<any>) =>
  idList.filter((entityId: any) => entityId !== '').map((entityId: any) => ({ id: entityId }));
