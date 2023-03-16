/**
 * The node factory function creates a node object with a left and right property.
 * @param {*} left The left node
 * @param {*} right  The right node
 * @returns {Object} The node object
 */
const Node = (data, left = null, right = null) => {
    return {
        data,
        left,
        right,
    };
};

export default Node;
