export const cTopics = [
  {
    id: 'printf',
    title: 'printf',
    description: 'Learn how to use the printf function to display output in C.',
    code: `#include <stdio.h>

int main() {
    int num = 5;
    printf("The number is: %d\\n", num);
    return 0;
}`,
    quiz: [
      {
        question: 'Which function is used to print output in C?',
        options: ['printf', 'cin', 'scanf', 'puts'],
        correctAnswer: 0
      },
      {
        question: 'What does the format specifier %d print in C?',
        options: ['Integer', 'Character', 'String', 'Float'],
        correctAnswer: 0
      },
      {
        question: 'Which header file is required for printf?',
        options: ['<stdio.h>', '<stdlib.h>', '<string.h>', '<math.h>'],
        correctAnswer: 0
      },
      {
        question: 'What does the format specifier %s print in C?',
        options: ['String', 'Character', 'Integer', 'Float'],
        correctAnswer: 0
      },
      {
        question: 'How do you print a floating point number in C?',
        options: ['%f', '%d', '%s', '%c'],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'variables',
    title: 'Variables',
    description: 'Learn how to declare and use variables in C.',
    code: `#include <stdio.h>

int main() {
    int num = 10;
    float pi = 3.14;
    printf("Number: %d, Pi: %.2f\\n", num, pi);
    return 0;
}`,
    quiz: [
      {
        question: 'What is a variable in C?',
        options: ['A storage location for data', 'A type of function', 'A mathematical operation', 'None of the above'],
        correctAnswer: 0
      },
      {
        question: 'Which data type is used for floating-point numbers in C?',
        options: ['int', 'char', 'float', 'double'],
        correctAnswer: 2
      },
      {
        question: 'How do you declare an integer variable in C?',
        options: ['int num;', 'float num;', 'char num;', 'string num;'],
        correctAnswer: 0
      },
      {
        question: 'What does the %f format specifier represent in C?',
        options: ['Integer', 'String', 'Character', 'Floating point number'],
        correctAnswer: 3
      },
      {
        question: 'Which of the following is a valid variable name in C?',
        options: ['num1', '1num', 'num-1', 'num.1'],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'scanf',
    title: 'scanf',
    description: 'Learn how to take user input using the scanf function in C.',
    code: `#include <stdio.h>

int main() {
    int num;
    printf("Enter a number: ");
    scanf("%d", &num);
    printf("You entered: %d\\n", num);
    return 0;
}`,
    quiz: [
      {
        question: 'Which function is used to take input from the user in C?',
        options: ['scanf', 'printf', 'cin', 'gets'],
        correctAnswer: 0
      },
      {
        question: 'What is the format specifier for integers in scanf?',
        options: ['%f', '%s', '%d', '%c'],
        correctAnswer: 2
      },
      {
        question: 'What symbol is used to store the address of a variable in scanf?',
        options: ['&', '*', '#', '@'],
        correctAnswer: 0
      },
      {
        question: 'Which of the following is correct for taking a string input using scanf?',
        options: ['scanf("%s", &str);', 'scanf("%s", str);', 'scanf("%d", str);', 'scanf("%s", *str);'],
        correctAnswer: 1
      },
      {
        question: 'What happens if the user enters an invalid input type for scanf?',
        options: ['The program will crash', 'The program will take the input as zero', 'The program will ignore the input', 'None of the above'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'if',
    title: 'if Condition',
    description: 'Learn how to use if statements to make decisions in C.',
    code: `#include <stdio.h>

int main() {
    int num;
    printf("Enter a number: ");
    scanf("%d", &num);
    if (num > 0) {
        printf("Positive number\\n");
    } else if (num < 0) {
        printf("Negative number\\n");
    } else {
        printf("Zero\\n");
    }
    return 0;
}`,
    quiz: [
      {
        question: 'What does an if statement do in C?',
        options: ['Executes code if the condition is true', 'Always executes code', 'Executes code if the condition is false', 'None of the above'],
        correctAnswer: 0
      },
      {
        question: 'Which keyword is used to check an alternative condition in C?',
        options: ['else if', 'else', 'switch', 'for'],
        correctAnswer: 0
      },
      {
        question: 'What happens if no condition is true in an if-else if-else chain?',
        options: ['The else block will execute', 'The program will crash', 'The first if block will execute', 'None of the above'],
        correctAnswer: 0
      },
      {
        question: 'Which operator is used to compare values in an if condition?',
        options: ['==', '!=', '<', 'All of the above'],
        correctAnswer: 3
      },
      {
        question: 'What is the output of this code if num = 5? if(num > 0){ printf("Positive"); } else { printf("Negative"); }',
        options: ['Positive', 'Negative', 'Zero', 'Error'],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'forLoop',
    title: 'for Loop',
    description: 'Learn how to use the for loop to repeat a block of code in C.',
    code: `#include <stdio.h>

int main() {
    for (int i = 0; i < 5; i++) {
        printf("Iteration %d\\n", i);
    }
    return 0;
}`,
    quiz: [
      {
        question: 'What is the correct syntax for a for loop in C?',
        options: ['for (int i = 0; i < 5; i++) { ... }', 'for (int i = 0; i < 5) { ... }', 'for (i = 0; i < 5; i++) { ... }', 'None of the above'],
        correctAnswer: 0
      },
      {
        question: 'What happens when the condition in a for loop becomes false?',
        options: ['The loop stops executing', 'The loop continues indefinitely', 'The loop will run once more', 'None of the above'],
        correctAnswer: 0
      },
      {
        question: 'What is the initialization part of the for loop used for?',
        options: ['To declare variables', 'To set the loop condition', 'To increase the loop counter', 'None of the above'],
        correctAnswer: 0
      },
      {
        question: 'In a for loop, what does the update part do?',
        options: ['It modifies the loop control variable', 'It prints a statement', 'It checks the loop condition', 'None of the above'],
        correctAnswer: 0
      },
      {
        question: 'What will be the output of the following for loop? for (int i = 0; i < 3; i++) { printf("%d ", i); }',
        options: ['0 1 2', '1 2 3', '0 1 2 3', 'None of the above'],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'whileLoop',
    title: 'while Loop',
    description: 'Learn how to use the while loop to repeat a block of code while a condition is true in C.',
    code: `#include <stdio.h>

int main() {
    int i = 0;
    while (i < 5) {
        printf("Iteration %d\\n", i);
        i++;
    }
    return 0;
}`,
    quiz: [
      {
        question: 'Which type of loop runs as long as the condition is true?',
        options: ['for', 'while', 'do-while', 'None of the above'],
        correctAnswer: 1
      },
      {
        question: 'What happens if the condition in a while loop is false initially?',
        options: ['The loop will not execute', 'The loop will execute once', 'The loop will execute indefinitely', 'None of the above'],
        correctAnswer: 0
      },
      {
        question: 'How do you exit a while loop in C?',
        options: ['By using the break statement', 'By using the continue statement', 'By making the condition false', 'None of the above'],
        correctAnswer: 0
      },
      {
        question: 'Which of the following statements will always be true in a while loop?',
        options: ['The condition will eventually become false', 'The condition will always stay true', 'The loop will run indefinitely', 'None of the above'],
        correctAnswer: 0
      },
      {
        question: 'What is the output of this code? int i = 3; while(i < 5) { printf("%d\\n", i); i++; }',
        options: ['3 4', '4 5', '3 4 5', 'None of the above'],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'doWhileLoop',
    title: 'do-while Loop',
    description: 'Learn how to use the do-while loop to execute a block of code at least once, regardless of the condition.',
    code: `#include <stdio.h>

int main() {
    int i = 0;
    do {
        printf("Iteration %d\\n", i);
        i++;
    } while (i < 5);
    return 0;
}`,
    quiz: [
      {
        question: 'What is the key feature of a do-while loop in C?',
        options: ['The loop always executes at least once', 'The loop runs only if the condition is true initially', 'The loop checks the condition before running', 'None of the above'],
        correctAnswer: 0
      },
      {
        question: 'What happens if the condition in a do-while loop is false initially?',
        options: ['The loop runs once', 'The loop runs indefinitely', 'The loop does not run', 'None of the above'],
        correctAnswer: 0
      },
      {
        question: 'What is the output of this code? int i = 0; do { printf("%d\\n", i); i++; } while (i < 2);',
        options: ['0 1', '0 1 2', '1 2', 'None of the above'],
        correctAnswer: 0
      },
      {
        question: 'Where is the condition checked in a do-while loop?',
        options: ['At the end of each iteration', 'At the beginning of each iteration', 'Before entering the loop', 'None of the above'],
        correctAnswer: 0
      },
      {
        question: 'Which loop guarantees that the code block will run at least once?',
        options: ['for', 'while', 'do-while', 'None of the above'],
        correctAnswer: 2
      }
    ]
  },
    {
      id: 'arrays',
      title: 'Arrays',
      description: 'Learn how to declare, initialize, and access elements in arrays.',
      code: `#include <stdio.h>
  
  int main() {
      int arr[] = {1, 2, 3, 4, 5};
      printf("First element: %d\\n", arr[0]);
      printf("Last element: %d\\n", arr[4]);
      return 0;
  }`,
      quiz: [
        {
          question: 'What is an array in C?',
          options: ['A collection of variables of the same data type', 'A type of pointer', 'A collection of strings', 'None of the above'],
          correctAnswer: 0
        },
        {
          question: 'How do you access the first element of an array in C?',
          options: ['arr[1]', 'arr[0]', 'arr[5]', 'arr[-1]'],
          correctAnswer: 1
        },
        {
          question: 'What will be the output of the following code: int arr[3] = {1, 2, 3}; printf("%d", arr[2]);',
          options: ['1', '2', '3', 'Error'],
          correctAnswer: 2
        },
        {
          question: 'What is the size of the array int arr[5]; in C?',
          options: ['4 bytes', '5 bytes', '20 bytes', 'Depends on the data type'],
          correctAnswer: 3
        },
        {
          question: 'What is the correct way to initialize an array of 5 integers in C?',
          options: ['int arr[] = {1, 2, 3, 4, 5};', 'int arr[5] = {1, 2, 3, 4};', 'int arr[5];', 'int arr[5] = {1, 2};'],
          correctAnswer: 0
        }
      ]
    },
    {
      id: 'twoDimensionalArrays',
      title: 'Two-Dimensional Arrays',
      description: 'Learn how to declare and access elements in two-dimensional arrays.',
      code: `#include <stdio.h>
  
  int main() {
      int arr[2][2] = {{1, 2}, {3, 4}};
      printf("Element at arr[0][1]: %d\\n", arr[0][1]);
      return 0;
  }`,
      quiz: [
        {
          question: 'What does a two-dimensional array represent in C?',
          options: ['A matrix or table', 'An array of arrays', 'A list of strings', 'None of the above'],
          correctAnswer: 1
        },
        {
          question: 'How do you access the element at row 1, column 2 in a 2D array?',
          options: ['arr[1][2]', 'arr[0][1]', 'arr[2][1]', 'arr[0][2]'],
          correctAnswer: 3
        },
        {
          question: 'What will be the output of the following code: int arr[2][2] = {{1, 2}, {3, 4}}; printf("%d", arr[1][0]);',
          options: ['1', '2', '3', '4'],
          correctAnswer: 2
        },
        {
          question: 'What is the correct way to declare a 2D array of size 3x3 in C?',
          options: ['int arr[3][3];', 'int arr[3][];', 'int arr[][];', 'int arr[3, 3];'],
          correctAnswer: 0
        },
        {
          question: 'How do you initialize a 2D array in C?',
          options: ['int arr[][] = {{1, 2}, {3, 4}};', 'int arr[2][2] = {1, 2, 3, 4};', 'int arr[2][2] = {{1}, {2}};', 'None of the above'],
          correctAnswer: 0
        }
      ]
    },
    {
      id: 'string',
      title: 'String',
      description: 'Learn how to manipulate strings in C.',
      code: `#include <stdio.h>
  #include <string.h>
  
  int main() {
      char str[] = "Hello";
      printf("String: %s\\n", str);
      return 0;
  }`,
      quiz: [
        {
          question: 'What is a string in C?',
          options: ['A sequence of characters', 'An integer array', 'A floating point number', 'None of the above'],
          correctAnswer: 0
        },
        {
          question: 'Which function is used to get the length of a string?',
          options: ['strlen', 'strlen()', 'strlength', 'strcpy'],
          correctAnswer: 0
        },
        {
          question: 'Which function is used to copy a string in C?',
          options: ['strcpy', 'strcat', 'strlen', 'strcmp'],
          correctAnswer: 0
        },
        {
          question: 'What is the correct way to declare a string in C?',
          options: ['char str[] = "Hello";', 'string str = "Hello";', 'char str = "Hello";', 'char str[5] = "Hello";'],
          correctAnswer: 0
        },
        {
          question: 'What will be the output of the following code? char str[] = "Hello"; printf("%s", str);',
          options: ['Hello', 'Hello World', 'Error', 'None of the above'],
          correctAnswer: 0
        }
      ]
    },
    {
      id: 'arrayOfStrings',
      title: 'Array of Strings',
      description: 'Learn how to create and use arrays of strings in C.',
      code: `#include <stdio.h>
  
  int main() {
      char *arr[] = {"Hello", "World"};
      printf("%s %s\\n", arr[0], arr[1]);
      return 0;
  }`,
      quiz: [
        {
          question: 'What is an array of strings in C?',
          options: ['An array of pointers to characters', 'An array of integers', 'An array of arrays', 'None of the above'],
          correctAnswer: 0
        },
        {
          question: 'How do you access the second string in an array of strings?',
          options: ['arr[2]', 'arr[1]', 'arr[0]', 'arr[3]'],
          correctAnswer: 1
        },
        {
          question: 'What will be the output of this code? char *arr[] = {"Hello", "World"}; printf("%s", arr[1]);',
          options: ['Hello', 'World', 'Hello World', 'Error'],
          correctAnswer: 1
        },
        {
          question: 'How do you declare an array of strings in C?',
          options: ['char *arr[] = {"Hello", "World"};', 'char arr[] = {"Hello", "World"};', 'string arr[] = {"Hello", "World"};', 'None of the above'],
          correctAnswer: 0
        },
        {
          question: 'Which type of array holds strings in C?',
          options: ['char[]', 'int[]', 'float[]', 'char*[]'],
          correctAnswer: 3
        }
      ]
    },
    {
      id: 'struct',
      title: 'Struct',
      description: 'Learn how to define and use structures in C.',
      code: `#include <stdio.h>
  
  struct Person {
      char name[50];
      int age;
  };
  
  int main() {
      struct Person person1 = {"Alice", 30};
      printf("Name: %s, Age: %d\\n", person1.name, person1.age);
      return 0;
  }`,
      quiz: [
        {
          question: 'What is a struct in C?',
          options: ['A data structure to hold different data types', 'An array of integers', 'A function', 'None of the above'],
          correctAnswer: 0
        },
        {
          question: 'How do you access a member of a struct in C?',
          options: ['Using a dot operator', 'Using an arrow operator', 'Using brackets', 'None of the above'],
          correctAnswer: 0
        },
        {
          question: 'How do you define a structure in C?',
          options: ['struct Person { char name[50]; int age; };', 'struct { char name[50]; int age; } Person;', 'struct Person { string name; int age; };', 'None of the above'],
          correctAnswer: 0
        },
        {
          question: 'What will be the output of this code? struct Person { char name[50]; int age; }; struct Person person1 = {"Alice", 30}; printf("%s %d", person1.name, person1.age);',
          options: ['Alice 30', 'Alice', '30', 'Error'],
          correctAnswer: 0
        },
        {
          question: 'What keyword is used to define a structure in C?',
          options: ['struct', 'class', 'structure', 'structType'],
          correctAnswer: 0
        }
      ]
    },
    {
      id: 'arrayOfStructs',
      title: 'Array of Structs',
      description: 'Learn how to declare and use arrays of structures in C.',
      code: `#include <stdio.h>
  
  struct Person {
      char name[50];
      int age;
  };
  
  int main() {
      struct Person people[2] = {{"Alice", 30}, {"Bob", 25}};
      printf("%s is %d years old\\n", people[0].name, people[0].age);
      return 0;
  }`,
      quiz: [
        {
          question: 'What is an array of structs in C?',
          options: ['An array containing elements of type struct', 'An array of strings', 'An array of integers', 'None of the above'],
          correctAnswer: 0
        },
        {
          question: 'How do you access a member of a struct within an array?',
          options: ['Using the dot operator', 'Using the arrow operator', 'Using the index operator', 'None of the above'],
          correctAnswer: 0
        },
        {
          question: 'How would you declare an array of 3 Person structs in C?',
          options: ['struct Person people[3];', 'struct Person[3] people;', 'array[3] Person;', 'None of the above'],
          correctAnswer: 0
        },
        {
          question: 'What is the output of this code? struct Person { char name[50]; int age; }; struct Person people[2] = {{"Alice", 30}, {"Bob", 25}}; printf("%s", people[1].name);',
          options: ['Alice', 'Bob', 'Error', 'None of the above'],
          correctAnswer: 1
        },
        {
          question: 'Which of the following is correct for initializing an array of structs?',
          options: ['struct Person people[2] = {{"Alice", 30}, {"Bob", 25}};', 'struct Person[2] people = {{"Alice", 30}, {"Bob", 25}};', 'struct Person[] people = {{"Alice", 30}, {"Bob", 25}};', 'None of the above'],
          correctAnswer: 0
        }
      ]
    },
    {
      id: 'globalVariable',
      title: 'Global Variable',
      description: 'Learn how to use global variables in C.',
      code: `#include <stdio.h>
  
  int globalVar = 10;
  
  int main() {
      printf("%d\\n", globalVar);
      return 0;
  }`,
      quiz: [
        {
          question: 'What is a global variable in C?',
          options: ['A variable declared outside all functions', 'A variable declared inside a function', 'A pointer to an integer', 'None of the above'],
          correctAnswer: 0
        },
        {
          question: 'Where can a global variable be accessed?',
          options: ['Anywhere in the program', 'Only inside the function it is declared in', 'Only inside the main function', 'None of the above'],
          correctAnswer: 0
        },
        {
          question: 'What is the scope of a global variable in C?',
          options: ['Throughout the program', 'Only within the function where it is declared', 'Only within a block', 'None of the above'],
          correctAnswer: 0
        },
        {
          question: 'What will happen if a global variable and a local variable have the same name?',
          options: ['The local variable will override the global variable', 'The global variable will override the local variable', 'Both will be accessible', 'None of the above'],
          correctAnswer: 0
        },
        {
          question: 'Which of the following is the correct way to declare a global variable?',
          options: ['int globalVar;', 'globalVar int;', 'int globalVar = 10;', 'None of the above'],
          correctAnswer: 2
        }
      ]
    }
  ];
  

