/* Check if value is an object created by Object constructor.
 *
 * |Name  |Desc                           |
 * |------|-------------------------------|
 * |val   |Value to check                 |
 * |return|True if value is a plain object|
 */

/* example
 * isPlainObj({}); // -> true
 * isPlainObj([]); // -> false
 * isPlainObj(function() {}); // -> false
 */

/* module
 * env: all
 */

/* typescript
 * export declare function isPlainObj(val: any): boolean;
 */

_('isObj isArr isFn has');

exports = function(val) {
    if (!isObj(val)) return false;

    const ctor = val.constructor;
    if (!isFn(ctor)) return false;
    if (!has(ctor.prototype, 'isPrototypeOf')) return false;

    return !isArr(val) && !isFn(val);
};
