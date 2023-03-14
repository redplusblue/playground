import Node from "./Node.mjs";
/**
 * The LinkedList factory function creates a new LinkedList object
 * @returns A new LinkedList object
 */
const LinkedList = () => {
    let HEAD = null;
    let len = 0;
    const size = () => {
        return len;
    };
    const head = () => {
        if (HEAD != null) {
            return HEAD;
        }
    };
    const tail = () => {
        if (HEAD != null) {
            let curr = HEAD;
            while (curr.next != null) {
                curr = curr.next;
            }
            return curr;
        }
    };

    const append = (node) => {
        // Append to the end of the list
        if (HEAD == null) {
            HEAD = node;
        } else {
            let curr = tail();
            curr.next = node;
        }
        len++;
    };

    const prepend = (node) => {
        // Append to the beginning of the list
        if (HEAD == null) {
            HEAD = node;
        } else {
            node.next = HEAD;
            HEAD = node;
        }
        len++;
    };

    const at = (index) => {
        if (index == 0) {
            return HEAD;
        } else {
            let currInd = 0;
            let currNode = HEAD;
            while (currNode != null && currInd < index) {
                currInd += 1;
                currNode = currNode.next;
            }
            if (currInd == index) {
                return currNode;
            } else {
                console.log("Index: { " + index + " } out of bounds.");
            }
        }
    };

    const pop = () => {
        // Remove the last item from the list
        if (HEAD != null) {
            let curr = HEAD;
            while (curr.next.next != null) {
                curr = curr.next;
            }
            curr.next = null;
        }
        len--;
    };

    const contains = (val) => {
        // Check if the list contains a value
        if (HEAD != null) {
            let curr = HEAD;
            while (curr != null) {
                if (curr.val == val) {
                    return true;
                }
                curr = curr.next;
            }
            return false;
        }
    };

    const find = (val) => {
        // Find the index of a value in the list
        if (HEAD != null) {
            let curr = HEAD;
            let currInd = 0;
            while (curr != null) {
                if (curr.val == val) {
                    return currInd;
                }
                curr = curr.next;
                currInd += 1;
            }
            return -1;
        }
    };

    const toString = () => {
        if (HEAD != null) {
            let curr = HEAD;
            let result = "";
            while (curr != null) {
                result += `( ${curr.val} ) -> `;
                curr = curr.next;
            }
            return result + "null";
        }
    };

    const insertAt = (value, index) => {
        if (index == 0) {
            prepend(Node(value, null));
            return;
        }
        // Insert a value at a given index
        let prevNode = at(index - 1);
        let newNode = Node(value, null);
        let temp = prevNode.next;
        prevNode.next = newNode;
        newNode.next = temp;
        len++;
    };

    const removeAt = (index) => {
        // Remove a value at a given index
        let prevNode = at(index - 1);
        let temp = prevNode.next.next;
        prevNode.next = temp;
        len--;
    };

    return {
        head,
        tail,
        append,
        prepend,
        size,
        at,
        contains,
        find,
        pop,
        toString,
        insertAt,
        removeAt,
    };
};
export default LinkedList;
