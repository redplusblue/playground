// Implementation of a stack using a linked list
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

// Define the element structure
typedef struct Element
{
    struct Element *next;
    void *data;
} Element;

// Create Stack
bool createStack(Element **stack)
/**
 * @brief Create a Stack object and initialize it to NULL
 *
 */
{
    *stack = NULL;
    return true;
}

// Push
bool push(Element **stack, void *data)
/**
 * @brief Push an element to the stack (LIFO)
 * First, create a new element and allocate memory for it, then set the data and next pointer.
 * Then, set the stack pointer to the new element.
 */
{
    Element *element = malloc(sizeof(Element));
    if (element == NULL)
        return false;
    element->data = data;
    element->next = *stack;
    *stack = element;
    return true;
}

// Pop
bool pop(Element **stack, void **data)
/**
 * @brief Pop an element from the stack (LIFO) and return the data
 * First, check if the stack is empty.
 * Then, set the data pointer to the data of the element and the stack pointer to the next element.
 */
{
    Element *element = malloc(sizeof(Element));
    // Check if stack is empty
    if (!(element = *stack))
        return false;
    *data = element->data;
    *stack = element->next;
    free(element);
    return true;
}

// Delete Stack
bool deleteStack(Element **stack)
/**
 * @brief Delete the stack and free the memory of all elements
 *
 */
{
    Element *next;
    while (*stack)
    {
        next = (*stack)->next;
        free(*stack);
        *stack = next;
    }
    return true;
}

// Main (Test)
int main()
/**
 * @brief Test the stack implementation by pushing 3 elements and then poping them again
 * Ideally, the output should be 3, 2, 1
 */
{
    Element *stack;
    int *data;
    createStack(&stack);
    data = malloc(sizeof(int));
    *data = 1;
    push(&stack, data);
    data = malloc(sizeof(int));
    *data = 2;
    push(&stack, data);
    data = malloc(sizeof(int));
    *data = 3;
    push(&stack, data);
    while (stack)
    {
        pop(&stack, (void **)&data);
        printf("%d\n", *data);
        free(data);
    }
    deleteStack(&stack);
    return 0;
}
