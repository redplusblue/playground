import LinkedList from "./LinkedList.mjs";
import Node from "./Node.mjs";
/* Manual Testing */
const list = LinkedList();
list.append(Node(1, null));
list.append(Node(2, null));
list.append(Node(3, null));
list.append(Node(4, null));
list.append(Node(5, null));
list.append(Node(6, null));
list.append(Node(7, null));
list.append(Node(8, null));
list.append(Node(9, null));
list.append(Node(10, null));

let expected =
    "( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 5 ) -> ( 6 ) -> ( 7 ) -> ( 8 ) -> ( 9 ) -> ( 10 ) -> null";
console.log("List: ", list.toString(), "Passed: ", list.toString() == expected);
console.log("Size: ", list.size(), "Passed: ", list.size() == 10);
console.log("Head: ", list.head(), "Passed: ", list.head().val == 1);
console.log("Tail: ", list.tail(), "Passed: ", list.tail().val == 10);
console.log("At 0: ", list.at(0), "Passed: ", list.at(0).val == 1);
console.log("At 1: ", list.at(1), "Passed: ", list.at(1).val == 2);
console.log("At 2: ", list.at(2), "Passed: ", list.at(2).val == 3);
console.log(
    "Contains 1: ",
    list.contains(1),
    "Passed: ",
    list.contains(1) == true
);
console.log(
    "Contains 2: ",
    list.contains(2),
    "Passed: ",
    list.contains(2) == true
);
console.log(
    "Contains 3: ",
    list.contains(3),
    "Passed: ",
    list.contains(3) == true
);
console.log(
    "Contains 4: ",
    list.contains(4),
    "Passed: ",
    list.contains(4) == true
);

console.log("Find 1: ", list.find(1), "Passed: ", list.find(1) == 0);
console.log("Find 2: ", list.find(2), "Passed: ", list.find(2) == 1);
console.log("Find 3: ", list.find(3), "Passed: ", list.find(3) == 2);
console.log("Find 4: ", list.find(4), "Passed: ", list.find(4) == 3);

list.pop();
expected =
    "( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 5 ) -> ( 6 ) -> ( 7 ) -> ( 8 ) -> ( 9 ) -> null";
console.log("List: ", list.toString(), "Passed: ", list.toString() == expected);
console.log("Size: ", list.size(), "Passed: ", list.size() == 9);
console.log("Head: ", list.head(), "Passed: ", list.head().val == 1);
console.log("Tail: ", list.tail(), "Passed: ", list.tail().val == 9);

list.insertAt(11, 3);
expected =
    "( 1 ) -> ( 2 ) -> ( 3 ) -> ( 11 ) -> ( 4 ) -> ( 5 ) -> ( 6 ) -> ( 7 ) -> ( 8 ) -> ( 9 ) -> null";
console.log("List: ", list.toString(), "Passed: ", list.toString() == expected);
console.log("Size: ", list.size(), "Passed: ", list.size() == 10);
console.log("Head: ", list.head(), "Passed: ", list.head().val == 1);
console.log("Tail: ", list.tail(), "Passed: ", list.tail().val == 9);

list.removeAt(3);
expected =
    "( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 5 ) -> ( 6 ) -> ( 7 ) -> ( 8 ) -> ( 9 ) -> null";
console.log("List: ", list.toString(), "Passed: ", list.toString() == expected);
console.log("Size: ", list.size(), "Passed: ", list.size() == 9);
console.log("Head: ", list.head(), "Passed: ", list.head().val == 1);
console.log("Tail: ", list.tail(), "Passed: ", list.tail().val == 9);
