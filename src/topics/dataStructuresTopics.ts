export const dataStructuresTopics = [
  {
    id: 'recursion',
    title: 'Recursion',
    description: 'Learn the concept of recursion in C++, where a function calls itself.',
    code: `#include <iostream>
using namespace std;

int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

int main() {
    int number = 5;
    cout << "Factorial of " << number << " is " << factorial(number) << endl;
    return 0;
}`,
    quiz: [
      {
        question: 'What is recursion in C++?',
        options: ['A function calling itself', 'A loop that repeats itself', 'A variable storing values', 'A type of data structure'],
        correctAnswer: 0
      },
      {
        question: 'What is the base case in a recursive function?',
        options: ['The point where the function starts', 'The point where the function stops calling itself', 'The function begins repeating', 'The return value of the function'],
        correctAnswer: 1
      },
      {
        question: 'What will happen if there is no base case in a recursive function?',
        options: ['It will result in an infinite loop', 'The program will crash', 'It will work fine', 'None of the above'],
        correctAnswer: 0
      },
      {
        question: 'Which of the following is an example of a recursive function?',
        options: ['factorial()', 'sum()', 'reverse()', 'all of the above'],
        correctAnswer: 3
      },
      {
        question: 'What does the function factorial(5) return?',
        options: ['120', '5', '1', 'None of the above'],
        correctAnswer: 0
      }
    ]
  },
  {
      id: 'malloc',
      title: 'Memory Allocation Using malloc()',
      description: 'Learn how to dynamically allocate memory using malloc() in C++.',
      code: `#include <iostream>
    #include <cstdlib>
    using namespace std;
    
    int main() {
        int *arr = (int *)malloc(5 * sizeof(int)); // malloc allocates memory for 5 integers
        if (arr == nullptr) {
            cout << "Memory allocation failed!" << endl;
            return 1;
        }
    
        // Initialize values in dynamically allocated memory
        for (int i = 0; i < 5; ++i)
            arr[i] = i + 1;
    
        cout << "Values in the dynamically allocated array: ";
        for (int i = 0; i < 5; ++i)
            cout << arr[i] << " ";
        cout << endl;
    
        free(arr);
         // Free the dynamically allocated memory
        return 0;
    }`,
      quiz: [
        {
          question: 'What does malloc() do in C++?',
          options: ['Allocates memory', 'Frees memory', 'Resizes memory', 'None of the above'],
          correctAnswer: 0
        },
        {
          question: 'What happens if malloc() fails?',
          options: ['Returns nullptr', 'Throws an exception', 'Allocates zero bytes', 'None of the above'],
          correctAnswer: 0
        },
        {
          question: 'What is the correct way to release memory allocated by malloc()?',
          options: ['free()', 'delete()', 'realloc()', 'calloc()'],
          correctAnswer: 0
        },
        {
          question: 'Which header file is needed to use malloc()?',
          options: ['<cstdlib>', '<malloc.h>', '<new>', '<iostream>'],
          correctAnswer: 0
        },
        {
          question: 'What does malloc() return if memory allocation is successful?',
          options: ['Pointer to allocated memory', 'Null pointer', 'Zero', 'None of the above'],
          correctAnswer: 0
        }
      ]
    },
       {
        id: 'calloc',
        title: 'Memory Allocation Using calloc()',
        description: 'Learn how to dynamically allocate memory using calloc() and initialize it to zero.',
        code: `#include <iostream>
      #include <cstdlib>
      using namespace std;
      
      int main() {
          int *arr = (int *)calloc(5, sizeof(int)); // calloc allocates memory for 5 integers and initializes to 0
          if (arr == nullptr) {
              cout << "Memory allocation failed!" << endl;
              return 1;
          }
      
          cout << "Values in the dynamically allocated and initialized array: ";
          for (int i = 0; i < 5; ++i)
              cout << arr[i] << " "; 
          // All values will be 0
          cout << endl;
      
          free(arr);
           // Free the dynamically allocated memory
          return 0;
      }`,
        quiz: [
          {
            question: 'What does calloc() do in C++?',
            options: ['Allocates memory and initializes it to zero', 'Allocates memory', 'Frees memory', 'Resizes memory'],
            correctAnswer: 0
          },
          {
            question: 'What is the primary difference between malloc() and calloc()?',
            options: ['calloc() initializes memory to 0', 'malloc() is faster', 'malloc() uses more memory', 'None of the above'],
            correctAnswer: 0
          },
          {
            question: 'What is returned by calloc() if memory allocation fails?',
            options: ['nullptr', '0', 'Invalid pointer', 'Exception'],
            correctAnswer: 0
          },
          {
            question: 'Which header file is needed for using calloc()?',
            options: ['<cstdlib>', '<malloc.h>', '<new>', '<iostream>'],
            correctAnswer: 0
          },
          {
            question: 'What happens if you don\'t free memory allocated by calloc()?',
            options: ['Memory leak', 'Nothing happens', 'Program crashes', 'Memory is automatically freed'],
            correctAnswer: 0
          }
        ]
      },      
      {
          id: 'realloc',
          title: 'Resizing Memory Using realloc()',
          description: 'Learn how to resize dynamically allocated memory using realloc().',
          code: `#include <iostream>
        #include <cstdlib>
        using namespace std;
        
        int main() {
            int *arr = (int *)malloc(5 * sizeof(int)); // Initially allocate memory for 5 integers
            if (arr == nullptr) {
                cout << "Memory allocation failed!" << endl;
                return 1;
            }
        
            for (int i = 0; i < 5; ++i)
                arr[i] = i + 1;
        
            // Resize the allocated memory to hold 10 integers
            arr = (int *)realloc(arr, 10 * sizeof(int));
            if (arr == nullptr) {
                cout << "Reallocation failed!" << endl;
                return 1;
            }
        
            for (int i = 5; i < 10; ++i)
                arr[i] = i + 1;
        
            cout << "Values after realloc(): ";
            for (int i = 0; i < 10; ++i)
                cout << arr[i] << " ";
            cout << endl;
        
            free(arr);
           // Free the dynamically allocated memory
            return 0;
        }`,
          quiz: [
            {
              question: 'What does realloc() do in C++?',
              options: ['Resizes previously allocated memory', 'Frees memory', 'Allocates new memory', 'None of the above'],
              correctAnswer: 0
            },
            {
              question: 'What happens if realloc() fails?',
              options: ['Returns nullptr', 'Keeps the original memory unchanged', 'Overwrites the original memory', 'Throws an exception'],
              correctAnswer: 0
            },
            {
              question: 'What is the time complexity of realloc()?',
              options: ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'],
              correctAnswer: 1
            },
            {
              question: 'Which function is used to release memory allocated by realloc()?',
              options: ['free()', 'delete()', 'malloc()', 'calloc()'],
              correctAnswer: 0
            },
            {
              question: 'Which header file is needed for using realloc() in C++?',
              options: ['<iostream>', '<stdlib.h>', '<malloc.h>', '<new>'],
              correctAnswer: 1
            }
          ]
        },
        {
    id: 'linked-list',
    title: 'Linked List',
    description: 'Learn how to implement and manipulate a linked list in C++.',
    code: `#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
};

void printList(Node* n) {
    while (n != nullptr) {
        cout << n->data << " ";
        n = n->next;
    }
}

int main() {
    Node* head = new Node();
    head->data = 10;
    head->next = new Node();
    head->next->data = 20;
    head->next->next = nullptr;

    printList(head);

    return 0;
}`,
    quiz: [
      {
        question: 'What is a linked list in C++?',
        options: ['A collection of nodes', 'A type of array', 'A static data structure', 'None of the above'],
        correctAnswer: 0
      },
      {
        question: 'Which pointer is used to connect the nodes in a linked list?',
        options: ['next', 'previous', 'head', 'tail'],
        correctAnswer: 0
      },
      {
        question: 'What happens if you try to print a linked list without checking for null pointers?',
        options: ['It will cause an infinite loop', 'It will throw an exception', 'It will print garbage values', 'It will cause a segmentation fault'],
        correctAnswer: 3
      },
      {
        question: 'Which function is used to allocate memory for a new node in a linked list?',
        options: ['new', 'malloc()', 'calloc()', 'None of the above'],
        correctAnswer: 0
      },
      {
        question: 'Which of the following is true about a linked list?',
        options: ['It is a sequential data structure', 'It stores data in contiguous memory locations', 'It is dynamic in size', 'All of the above'],
        correctAnswer: 2
      }
    ]
  },
   {
    id: 'doubleLinkedList',
    title: 'Double Linked List',
    description: 'Learn how to implement a double linked list in C++ with operations like insertion, deletion, and traversal.',
    code: `#include <iostream>
  using namespace std;
  
  class Node {
  public:
      int data;
      Node* next;
      Node* prev;
  
      Node(int value) {
          data = value;
          next = nullptr;
          prev = nullptr;
      }
  };
  
  class DoublyLinkedList {
  public:
      Node* head;
  
      DoublyLinkedList() {
          head = nullptr;
      }
  
      void insertAtEnd(int value) {
          Node* newNode = new Node(value);
          if (head == nullptr) {
              head = newNode;
              return;
          }
          Node* temp = head;
          while (temp->next != nullptr)
              temp = temp->next;
          temp->next = newNode;
          newNode->prev = temp;
      }
  
      void printList() {
          Node* temp = head;
          while (temp != nullptr) {
              cout << temp->data << " ";
              temp = temp->next;
          }
          cout << endl;
      }
  
      void deleteNode(int value) {
          Node* temp = head;
          while (temp != nullptr && temp->data != value)
              temp = temp->next;
          if (temp == nullptr) return;
          if (temp->prev != nullptr)
              temp->prev->next = temp->next;
          if (temp->next != nullptr)
              temp->next->prev = temp->prev;
          if (temp == head)
              head = temp->next;
          delete temp;
      }
  };
  
  int main() {
      DoublyLinkedList list;
      list.insertAtEnd(10);
      list.insertAtEnd(20);
      list.insertAtEnd(30);
      list.printList();
  
      list.deleteNode(20);
      list.printList();
      return 0;
  }`,
    quiz: [
      {
        question: 'What is the main advantage of a doubly linked list over a singly linked list?',
        options: ['Ability to traverse both directions', 'Faster insertion', 'More memory usage', 'Easier deletion'],
        correctAnswer: 0
      },
      {
        question: 'Which pointer in a doubly linked list points to the previous node?',
        options: ['prev', 'next', 'head', 'tail'],
        correctAnswer: 0
      },
      {
        question: 'Which operation does the deleteNode() function perform?',
        options: ['Deletes a node from the list', 'Inserts a node at the end', 'Prints all nodes', 'Finds the maximum node'],
        correctAnswer: 0
      },
      {
        question: 'What happens when a node is deleted in a doubly linked list?',
        options: ['The previous and next nodes are updated', 'The list is cleared', 'The node becomes null', 'No change'],
        correctAnswer: 0
      },
      {
        question: 'How is a doubly linked list traversed?',
        options: ['By following both next and prev pointers', 'By following only next pointers', 'By following only prev pointers', 'By using an array'],
        correctAnswer: 0
      }
    ]
  },
 {
    id: 'circularLinkedList',
    title: 'Circular Linked List',
    description: 'Learn how to implement a circular linked list in C++ with operations like insertion, deletion, and traversal.',
    code: `#include <iostream>
  using namespace std;
  
  class Node {
  public:
      int data;
      Node* next;
  
      Node(int value) {
          data = value;
          next = nullptr;
      }
  };
  
  class CircularLinkedList {
  public:
      Node* head;
  
      CircularLinkedList() {
          head = nullptr;
      }
  
      void insertAtEnd(int value) {
          Node* newNode = new Node(value);
          if (head == nullptr) {
              head = newNode;
              newNode->next = head;
              return;
          }
          Node* temp = head;
          while (temp->next != head)
              temp = temp->next;
          temp->next = newNode;
          newNode->next = head;
      }
  
      void printList() {
          if (head == nullptr) return;
          Node* temp = head;
          do {
              cout << temp->data << " ";
              temp = temp->next;
          } while (temp != head);
          cout << endl;
      }
  
      void deleteNode(int value) {
          if (head == nullptr) return;
          Node* temp = head;
          if (temp->data == value) {
              Node* last = head;
              while (last->next != head)
                  last = last->next;
              if (head == head->next) {
                  delete head;
                  head = nullptr;
                  return;
              }
              last->next = head->next;
              delete head;
              head = last->next;
              return;
          }
          while (temp->next != head && temp->data != value)
              temp = temp->next;
          if (temp->data == value) {
              temp->prev->next = temp->next;
              delete temp;
          }
      }
  };
  
  int main() {
      CircularLinkedList list;
      list.insertAtEnd(10);
      list.insertAtEnd(20);
      list.insertAtEnd(30);
      list.printList();
  
      list.deleteNode(20);
      list.printList();
      return 0;
  }`,
    quiz: [
      {
        question: 'What is the primary feature of a circular linked list?',
        options: ['The last node points to the first node', 'Nodes are static', 'Only the first node can be accessed', 'Nodes have a fixed size'],
        correctAnswer: 0
      },
      {
        question: 'What happens when a node is deleted from a circular linked list?',
        options: ['The next pointer of the last node is updated', 'The list becomes empty', 'The head pointer is reset', 'Nodes are left unlinked'],
        correctAnswer: 0
      },
      {
        question: 'What is the time complexity for traversing a circular linked list?',
        options: ['O(n)', 'O(1)', 'O(n^2)', 'O(log n)'],
        correctAnswer: 0
      },
      {
        question: 'How does circular linked list traversal differ from a regular linked list?',
        options: ['It does not stop at the last node', 'It stops when the first node is reached', 'It has only one pointer', 'It uses two pointers'],
        correctAnswer: 0
      },
      {
        question: 'Which function is used to insert a node at the end of a circular linked list?',
        options: ['insertAtEnd()', 'insertAtStart()', 'deleteNode()', 'reverseList()'],
        correctAnswer: 0
      }
    ]
  },
 {
    id: 'doubleCircularLinkedList',
    title: 'Double Circular Linked List',
    description: 'Learn how to implement a doubly circular linked list in C++ with operations like insertion, deletion, and traversal.',
    code: `#include <iostream>
  using namespace std;
  
  class Node {
  public:
      int data;
      Node* next;
      Node* prev;
  
      Node(int value) {
          data = value;
          next = nullptr;
          prev = nullptr;
      }
  };
  
  class DoublyCircularLinkedList {
  public:
      Node* head;
  
      DoublyCircularLinkedList() {
          head = nullptr;
      }
  
      void insertAtEnd(int value) {
          Node* newNode = new Node(value);
          if (head == nullptr) {
              head = newNode;
              newNode->next = head;
              newNode->prev = head;
              return;
          }
          Node* temp = head;
          while (temp->next != head)
              temp = temp->next;
          temp->next = newNode;
          newNode->prev = temp;
          newNode->next = head;
          head->prev = newNode;
      }
  
      void printList() {
          if (head == nullptr) return;
          Node* temp = head;
          do {
              cout << temp->data << " ";
              temp = temp->next;
          } while (temp != head);
          cout << endl;
      }
  
      void deleteNode(int value) {
          if (head == nullptr) return;
          Node* temp = head;
          if (temp->data == value) {
              Node* last = head;
              while (last->next != head)
                  last = last->next;
              if (head == head->next) {
                  delete head;
                  head = nullptr;
                  return;
              }
              last->next = head->next;
              head->next->prev = last;
              delete head;
              head = last->next;
              return;
          }
          while (temp->next != head && temp->data != value)
              temp = temp->next;
          if (temp->data == value) {
              temp->prev->next = temp->next;
              temp->next->prev = temp->prev;
              delete temp;
          }
      }
  };
  
  int main() {
      DoublyCircularLinkedList list;
      list.insertAtEnd(10);
      list.insertAtEnd(20);
      list.insertAtEnd(30);
      list.printList();
  
      list.deleteNode(20);
      list.printList();
      return 0;
  }`,
    quiz: [
      {
        question: 'What is the main feature of a doubly circular linked list?',
        options: ['Each node points to both its previous and next nodes, and the last node points back to the first node', 'Nodes are only linked in one direction', 'Nodes are static', 'None of the above'],
        correctAnswer: 0
      },
      {
        question: 'What happens when a node is deleted in a doubly circular linked list?',
        options: ['Both previous and next nodes are updated', 'Only the previous node is updated', 'Only the next node is updated', 'No change'],
        correctAnswer: 0
      },
      {
        question: 'Which operation does the deleteNode() function perform?',
        options: ['Deletes a node from the circular linked list', 'Inserts a node at the end', 'Prints all nodes', 'Reverses the list'],
        correctAnswer: 0
      },
      {
        question: 'What happens when you insert a node into an empty doubly circular linked list?',
        options: ['The node points to itself', 'The node points to nullptr', 'The list becomes empty', 'The node is ignored'],
        correctAnswer: 0
      },
      {
        question: 'Which pointer in a doubly circular linked list points to the last node?',
        options: ['prev', 'next', 'head', 'tail'],
        correctAnswer: 0
      }
    ]
  },
 
  {
    id: 'stack',
    title: 'Stack',
    description: 'Learn the stack data structure and its operations like push, pop, and top.',
    code: `#include <iostream>
#include <stack>
using namespace std;

int main() {
    stack<int> s;
    s.push(10);
    s.push(20);
    s.push(30);

    cout << "Top of stack: " << s.top() << endl;

    s.pop();
    cout << "Top of stack after pop: " << s.top() << endl;

    return 0;
}`,
    quiz: [
      {
        question: 'Which operation is used to remove an element from a stack?',
        options: ['pop()', 'remove()', 'delete()', 'top()'],
        correctAnswer: 0
      },
      {
        question: 'Which method returns the top element of a stack without removing it?',
        options: ['pop()', 'push()', 'top()', 'peek()'],
        correctAnswer: 2
      },
      {
        question: 'What is the time complexity of the push() operation in a stack?',
        options: ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'],
        correctAnswer: 0
      },
      {
        question: 'Which of the following best describes a stack?',
        options: ['FIFO', 'LIFO', 'Both FIFO and LIFO', 'None of the above'],
        correctAnswer: 1
      },
      {
        question: 'What does the stack data structure follow?',
        options: ['Queue principle', 'Priority principle', 'LIFO principle', 'FIFO principle'],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 'queue',
    title: 'Queue',
    description: 'Learn the queue data structure and its operations like enqueue, dequeue, and front.',
    code: `#include <iostream>
#include <queue>
using namespace std;

int main() {
    queue<int> q;
    q.push(10);
    q.push(20);
    q.push(30);

    cout << "Front of queue: " << q.front() << endl;

    q.pop();
    cout << "Front of queue after pop: " << q.front() << endl;

    return 0;
}`,
    quiz: [
      {
        question: 'Which operation is used to add an element to a queue?',
        options: ['push()', 'enqueue()', 'insert()', 'add()'],
        correctAnswer: 0
      },
      {
        question: 'Which operation is used to remove an element from a queue?',
        options: ['pop()', 'dequeue()', 'remove()', 'front()'],
        correctAnswer: 0
      },
      {
        question: 'What is the time complexity of the pop() operation in a queue?',
        options: ['O(1)', 'O(n)', 'O(log n)', 'O(n^2)'],
        correctAnswer: 0
      },
      {
        question: 'Which data structure follows FIFO?',
        options: ['Queue', 'Stack', 'Deque', 'None of the above'],
        correctAnswer: 0
      },
      {
        question: 'Which method returns the front element of a queue without removing it?',
        options: ['pop()', 'top()', 'front()', 'peek()'],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 'deque',
    title: 'Deque',
    description: 'Learn how to use Deque (Double-Ended Queue) in C++ for efficient insertion and deletion at both ends.',
    code: `#include <iostream>
  #include <deque>
  using namespace std;
  
  int main() {
      deque<int> dq;
  
      dq.push_back(10);  
      // Insert at the back
      dq.push_front(20); 
      // Insert at the front
      dq.push_back(30);
      dq.push_front(40);
  
      cout << "Deque after insertion: ";
      for (int val : dq) {
          cout << val << " ";
      }
      cout << endl;
  
      dq.pop_front();  
      // Remove from front
      dq.pop_back();  
       // Remove from back
  
      cout << "Deque after popping: ";
      for (int val : dq) {
          cout << val << " ";
      }
      cout << endl;
  
      return 0;
  }`,
    quiz: [
      {
        question: 'What is the main feature of a deque?',
        options: ['Elements can be added or removed from both ends', 'Elements can only be added at the front', 'It is a type of priority queue', 'None of the above'],
        correctAnswer: 0
      },
      {
        question: 'Which function is used to insert an element at the back of a deque?',
        options: ['push_back()', 'push_front()', 'insert()', 'pop_back()'],
        correctAnswer: 0
      },
      {
        question: 'Which function removes an element from the front of a deque?',
        options: ['pop_front()', 'pop_back()', 'erase()', 'remove()'],
        correctAnswer: 0
      },
      {
        question: 'Which header file is needed to use deque in C++?',
        options: ['<deque>', '<vector>', '<list>', '<queue>'],
        correctAnswer: 0
      },
      {
        question: 'How can you access an element in a deque by index?',
        options: ['Using the [] operator', 'Using pop_back()', 'Using pop_front()', 'Using push_back()'],
        correctAnswer: 0
      }
    ]
  },
  
  {
    id: 'heap',
    title: 'Heap',
    description: 'Learn about heaps, a special type of binary tree used to implement priority queues.',
    code: `#include <iostream>
#include <queue>
using namespace std;

int main() {
    priority_queue<int> pq;
    pq.push(10);
    pq.push(20);
    pq.push(5);

    cout << "Top of heap: " << pq.top() << endl;
    pq.pop();
    cout << "Top of heap after pop: " << pq.top() << endl;

    return 0;
}`,
    quiz: [
      {
        question: 'What type of binary tree is used in heaps?',
        options: ['Complete binary tree', 'Balanced binary tree', 'Full binary tree', 'None of the above'],
        correctAnswer: 0
      },
      {
        question: 'What is the time complexity of the push operation in a heap?',
        options: ['O(log n)', 'O(1)', 'O(n)', 'O(n^2)'],
        correctAnswer: 0
      },
      {
        question: 'Which operation is used to remove the top element from a heap?',
        options: ['pop()', 'delete()', 'remove()', 'extract()'],
        correctAnswer: 0
      },
      {
        question: 'What does a priority queue implement in C++?',
        options: ['Heap', 'Stack', 'Queue', 'Linked list'],
        correctAnswer: 0
      },
      {
        question: 'Which of the following is true about a heap?',
        options: ['It can be represented as an array', 'It is always sorted', 'It is a balanced tree', 'All of the above'],
        correctAnswer: 0
      }
    ]
  }
];
