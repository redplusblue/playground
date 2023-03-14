/**
 * The Node factory function creates a new node object
 * @param {*} val The value of the node
 * @param {*} next The next node in the list
 * @returns A new node object
 */
const Node = (val, next) => {
    return { val, next };
};
export default Node;
