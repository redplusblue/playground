import Node from "./Node.mjs";

const Tree = () => {
    let ROOT = Node(null, null, null);

    const rootNode = () => {
        return ROOT;
    };

    const buildTree = (nodes) => {
        if (!nodes) {
            return null;
        }
        // remove duplicates using a HashSet, if needed
        if (nodes.length != new Set(nodes).size) {
            nodes = [...new Set(nodes)];
        }
        // Sort the array
        nodes.sort((a, b) => a - b);
        console.log("Sorted Array");
        console.log(nodes);
        ROOT = sortedArrayToBST(nodes);
        return ROOT;
    };

    const sortedArrayToBST = (array) => {
        if (array.length == 0 || !array) {
            return null;
        }
        // Middle element: root
        let mid = Math.floor(array.length / 2);
        let root = Node(array[mid]);
        // Recursively call it for left and right
        root.left = sortedArrayToBST(array.slice(0, mid));
        root.right = sortedArrayToBST(array.slice(mid + 1, array.length));
        return root;
    };

    const insertNode = (node, at = ROOT) => {
        // If node is in the tree, return
        if (findNode(node.data) != null) {
            return;
        }
        let temp = at;
        if (node.data > temp.data) {
            // Go right
            if (temp.right == null) {
                temp.right = node;
                return;
            }
            insertNode(node, temp.right);
        } else {
            // Go left
            if (temp.left == null) {
                temp.left = node;
                return;
            }
            insertNode(node, temp.left);
        }
    };

    const deleteNode = (value, at = ROOT) => {
        // This function deletes a node with a given value
        let temp = at;
        if (temp == null) {
            return null;
        }
        if (value < temp.data) {
            temp.left = deleteNode(value, temp.left);
        }
        if (value > temp.data) {
            temp.right = deleteNode(value, temp.right);
        }
        if (value == temp.data) {
            if (temp.left == null) {
                return temp.right;
            }
            if (temp.right == null) {
                return temp.left;
            }
            // If both children exist
            let tempNode = temp.right;
            while (tempNode.left != null) {
                tempNode = tempNode.left;
            }
            temp.data = tempNode.data;
            temp.right = deleteNode(tempNode.data, temp.right);
        }
        return temp;
    };

    const findNode = (value) => {
        let temp = ROOT;
        while (temp != null) {
            if (value == temp.data) {
                return temp;
            }
            if (value < temp.data) {
                temp = temp.left;
            } else {
                temp = temp.right;
            }
        }
        return null;
    };

    // Top to bottom, left to right
    const levelOrder = (func) => {
        // If no function is passed, return the array
        if (!func) {
            let arr = [];
            levelOrder((node) => arr.push(node.data));
            return arr;
        }
        // BFS
        let queue = [];
        queue.push(ROOT);
        while (queue.length > 0) {
            let node = queue.shift();
            func(node);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    };

    // Left, root, right
    const inOrder = (func) => {
        // If no function is passed, return the array
        if (!func) {
            let arr = [];
            inOrder((node) => arr.push(node.data));
            return arr;
        }
        // DFS
        let stack = [];
        let node = ROOT;
        while (stack.length > 0 || node != null) {
            if (node != null) {
                stack.push(node);
                node = node.left;
            } else {
                node = stack.pop();
                func(node);
                node = node.right;
            }
        }
    };

    // Root, left, right
    const preOrder = (func) => {
        // If no function is passed, return the array
        if (!func) {
            let arr = [];
            preOrder((node) => arr.push(node.data));
            return arr;
        }
        // DFS
        let stack = [];
        let node = ROOT;
        while (stack.length > 0 || node != null) {
            if (node != null) {
                // Push the node before going to children
                func(node);
                stack.push(node);
                node = node.left;
            } else {
                node = stack.pop();
                node = node.right;
            }
        }
    };

    // Left, right, root
    const postOrder = (func) => {
        // If no function is passed, return the array
        if (!func) {
            let arr = [];
            postOrder((node) => arr.push(node.data));
            return arr;
        }
        // DFS
        let stack = [];
        let node = ROOT;
        while (stack.length > 0 || node != null) {
            if (node != null) {
                stack.push(node);
                node = node.left;
            } else {
                // If right child doesn't exist or was already traversed
                let temp = stack[stack.length - 1].right;
                if (temp == null) {
                    temp = stack.pop();
                    func(temp);
                    // Traverse the parent of the last node
                    while (
                        stack.length > 0 &&
                        temp == stack[stack.length - 1].right
                    ) {
                        temp = stack.pop();
                        func(temp);
                    }
                } else {
                    node = temp;
                }
            }
        }
    };

    // Height: number of edges in the longest path from a node to a leaf
    const height = (node = ROOT) => {
        if (node == null) {
            return 0;
        } else if (node.left == null && node.right == null) {
            // Leaf node
            return 0;
        }
        return 1 + Math.max(height(node.left), height(node.right));
    };

    // Depth: number of edges in the path from the root to a node
    const depth = (node = ROOT) => {
        if (node == ROOT) {
            return 0;
        }
        let temp = ROOT;
        let depth = 0;
        // Traverse the tree until the node is found
        while (temp != node) {
            if (node.data < temp.data) {
                temp = temp.left;
            } else {
                temp = temp.right;
            }
            depth++;
        }
        return depth;
    };

    const isBalanced = (node = ROOT) => {
        if (node == null) {
            return true;
        }
        let leftHeight = height(node.left);
        let rightHeight = height(node.right);
        if (
            Math.abs(leftHeight - rightHeight) <= 1 &&
            isBalanced(node.left) &&
            isBalanced(node.right)
        ) {
            return true;
        }
        return false;
    };

    const rebalance = () => {
        if (isBalanced()) {
            return;
        }
        let arr = inOrder();
        ROOT = null;
        buildTree(arr);
    };

    return {
        rootNode,
        buildTree,
        insertNode,
        deleteNode,
        findNode,
        levelOrder,
        inOrder,
        preOrder,
        postOrder,
        height,
        depth,
        isBalanced,
        rebalance,
    };
};

export default Tree;
