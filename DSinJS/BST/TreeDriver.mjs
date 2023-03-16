import Node from "./Node.mjs";
import Tree from "./Tree.mjs";

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node == null) {
        return;
    }
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};

// BST from randomly generated array
const tree = Tree();
const nodes = [];
for (let i = 0; i < 10; i++) {
    nodes.push(Math.floor(Math.random() * 100));
}
tree.buildTree(nodes);
prettyPrint(tree.rootNode());

// Confirm that the tree is balanced
console.log(tree.isBalanced());

// Level, Pre, Post, In order traversals
console.log("Level order traversal: ");
console.log(tree.levelOrder());
console.log("Pre order traversal: ");
console.log(tree.preOrder());
console.log("Post order traversal: ");
console.log(tree.postOrder());
console.log("In order traversal: ");
console.log(tree.inOrder());

// Add random values > 100 to unbalance the tree
for (let i = 0; i < 5; i++) {
    tree.insertNode(Node(Math.floor(Math.random() * 100 + 100)));
}

// Confirm that the tree is unbalanced
console.log(tree.isBalanced());

// Balance the tree
tree.rebalance();

// Confirm that the tree is balanced
console.log(tree.isBalanced());

// Level, Pre, Post, In order traversals
console.log("Level order traversal: ");
console.log(tree.levelOrder());
console.log("Pre order traversal: ");
console.log(tree.preOrder());
console.log("Post order traversal: ");
console.log(tree.postOrder());
console.log("In order traversal: ");
console.log(tree.inOrder());

prettyPrint(tree.rootNode());
