
// cppTopics.ts
export const cppTopics = [
  {
    id: 'cin',
    title: 'cout & cin',
    description: 'Learn how to use the cin object to take user input.',
    code: `#include <iostream>
using namespace std;

int main() {
    int num;
    cout << "Enter a number: ";
    cin >> num;
    cout << "You entered: " << num << endl;
    return 0;
}`,
    quiz: [
      {
        question: 'Which object is used to take user input in C++?',
        options: ['cin', 'cout', 'input', 'scanf'],
        correctAnswer: 0
      },
      {
        question: 'What type of data can be read using cin?',
        options: ['int', 'float', 'string', 'All of the above'],
        correctAnswer: 3
      },
      {
        question: 'What header file is required for cin in C++?',
        options: ['<iostream>', '<cin>', '<cstdio>', '<input>'],
        correctAnswer: 0
      },
      {
        question: 'What will happen if invalid input is entered in cin?',
        options: ['Program will crash', 'cin will ignore the input', 'cin will enter a failure state', 'Program will continue normally'],
        correctAnswer: 2
      },
      {
        question: 'Which operator is used to extract data from cin?',
        options: ['>>', '<<', '::', '=='],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'ifCondition',
    title: 'if Condition',
    description: 'Learn how to use if conditions in C++ to control the flow of your program based on specific conditions.',
    code: `#include <iostream>
  using namespace std;
  
  int main() {
      int num;
  
      cout << "Enter a number: ";
      cin >> num;
  
      if (num > 0) {
          cout << "The number is positive." << endl;
      } else if (num < 0) {
          cout << "The number is negative." << endl;
      } else {
          cout << "The number is zero." << endl;
      }
  
      return 0;
  }`,
    quiz: [
      {
        question: 'What will happen if the condition in an if statement is true?',
        options: ['The code inside the if block will execute', 'The code inside the else block will execute', 'The code inside the else if block will execute', 'None of the above'],
        correctAnswer: 0
      },
      {
        question: 'What is the purpose of the else block in an if-else statement?',
        options: ['It executes when the if condition is false', 'It executes when the if condition is true', 'It is optional', 'None of the above'],
        correctAnswer: 0
      },
      {
        question: 'Which operator is used to compare values in an if condition?',
        options: ['==', '!=', '<', '>', 'All of the above'],
        correctAnswer: 4
      },
      {
        question: 'What happens if all conditions in an if-else if-else chain are false?',
        options: ['The code inside the else block executes', 'The code inside the first if block executes', 'The program will terminate', 'None of the above'],
        correctAnswer: 0
      },
      {
        question: 'What is the correct syntax for an if-else statement in C++?',
        options: ['if (condition) { ... } else { ... }', 'if condition { ... } else: { ... }', 'if condition { ... }', 'if (condition) else { ... }'],
        correctAnswer: 0
      }
    ]
  },
 {
    id: 'switchStatement',
    title: 'switch Statement',
    description: 'Learn how to use the switch statement in C++ for multiple branching based on specific values.',
    code: `#include <iostream>
  using namespace std;
  
  int main() {
      int day;
  
      cout << "Enter a number (1-7) to find the corresponding day: ";
      cin >> day;
  
      switch (day) {
          case 1:
              cout << "Sunday" << endl;
              break;
          case 2:
              cout << "Monday" << endl;
              break;
          case 3:
              cout << "Tuesday" << endl;
              break;
          case 4:
              cout << "Wednesday" << endl;
              break;
          case 5:
              cout << "Thursday" << endl;
              break;
          case 6:
              cout << "Friday" << endl;
              break;
          case 7:
              cout << "Saturday" << endl;
              break;
          default:
              cout << "Invalid number!" << endl;
      }
  
      return 0;
  }`,
    quiz: [
      {
        question: 'What does the switch statement do in C++?',
        options: ['It chooses a code block to execute based on the value of a variable', 'It loops over the given values', 'It compares two values', 'None of the above'],
        correctAnswer: 0
      },
      {
        question: 'What is the role of the break statement in a switch case?',
        options: ['It terminates the switch statement and exits the case block', 'It continues to the next case block', 'It is used to compare values', 'None of the above'],
        correctAnswer: 0
      },
      {
        question: 'What will happen if you omit the break statement in a switch case?',
        options: ['The program will continue executing the next case', 'The program will terminate', 'The switch statement will not work', 'None of the above'],
        correctAnswer: 0
      },
      {
        question: 'Which of the following can be used as a case label in a switch statement?',
        options: ['Integer values', 'Character literals', 'Constant expressions', 'All of the above'],
        correctAnswer: 3
      },
      {
        question: 'What will be the output if you input 5 in the given switch-case example?',
        options: ['Thursday', 'Friday', 'Invalid number!', 'None of the above'],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'for-loop',
    title: 'for Loop',
    description: 'Learn how to use the for loop to iterate a specific number of times.',
    code: `#include <iostream>
using namespace std;

int main() {
    for (int i = 0; i < 5; i++) {
        cout << i << " ";
    }
    return 0;
}`,
    quiz: [
      {
        question: 'What does the following for loop do? for (int i = 0; i < 5; i++)',
        options: ['Runs 5 times', 'Runs infinitely', 'Runs until i is greater than 5', 'Prints 5 times'],
        correctAnswer: 0
      },
      {
        question: 'What is the first statement executed in the for loop?',
        options: ['Initialization', 'Condition check', 'Increment', 'Print statement'],
        correctAnswer: 0
      },
      {
        question: 'What is the purpose of the increment/decrement part of a for loop?',
        options: ['To update the loop variable', 'To check if the loop should terminate', 'To initialize the loop', 'None of the above'],
        correctAnswer: 0
      },
      {
        question: 'Which part of the for loop checks if the loop should continue?',
        options: ['Condition check', 'Initialization', 'Increment', 'None of the above'],
        correctAnswer: 0
      },
      {
        question: 'What happens if the condition in a for loop is never met?',
        options: ['The loop runs infinitely', 'The loop doesn’t run at all', 'The loop runs once', 'The program crashes'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'while-loop',
    title: 'while Loop',
    description: 'Learn how to use the while loop to iterate until a condition is met.',
    code: `#include <iostream>
using namespace std;

int main() {
    int i = 0;
    while (i < 5) {
        cout << i << " ";
        i++;
    }
    return 0;
}`,
    quiz: [
      {
        question: 'What condition must be true for the while loop to continue?',
        options: ['Initialization', 'Condition', 'Increment', 'None of the above'],
        correctAnswer: 1
      },
      {
        question: 'What will happen if the condition in a while loop is initially false?',
        options: ['The loop will execute once', 'The loop will not execute', 'The loop will run infinitely', 'The program will crash'],
        correctAnswer: 1
      },
      {
        question: 'Which part of the while loop controls the number of iterations?',
        options: ['Condition', 'Initialization', 'Increment', 'None of the above'],
        correctAnswer: 0
      },
      {
        question: 'What happens if the increment statement is omitted in a while loop?',
        options: ['The loop runs infinitely', 'The loop does not execute', 'The loop runs once', 'The program stops'],
        correctAnswer: 0
      },
      {
        question: 'How can you avoid an infinite loop in a while statement?',
        options: ['By providing a false condition', 'By not using the increment statement', 'By using break statements', 'All of the above'],
        correctAnswer: 3
      }
    ]
  },

  
  {
    id: 'do-while-loop',
    title: 'do-while Loop',
    description: 'Learn how to use the do-while loop where the body is executed at least once.',
    code: `#include <iostream>
using namespace std;

int main() {
    int i = 0;
    do {
        cout << i << " ";
        i++;
    } while (i < 5);
    return 0;
}`,
    quiz: [
      {
        question: 'What is the main difference between a do-while loop and a while loop?',
        options: ['The do-while loop executes at least once', 'The while loop executes at least once', 'The do-while loop checks the condition before execution', 'The while loop doesn’t execute if the condition is false'],
        correctAnswer: 0
      },
      {
        question: 'When is the condition evaluated in a do-while loop?',
        options: ['Before the first iteration', 'After the first iteration', 'During the second iteration', 'Before exiting the loop'],
        correctAnswer: 1
      },
      {
        question: 'Which part of the do-while loop ensures the loop runs at least once?',
        options: ['Condition check', 'Body of the loop', 'Initialization', 'None of the above'],
        correctAnswer: 1
      },
      {
        question: 'How can you exit a do-while loop prematurely?',
        options: ['By using break', 'By changing the condition to false', 'By incrementing the loop variable', 'By using continue'],
        correctAnswer: 0
      },
      {
        question: 'What happens if the condition in a do-while loop is false?',
        options: ['The loop will execute once', 'The loop will not execute at all', 'The loop runs infinitely', 'The program will crash'],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'vector',
    title: 'vector',
    description: 'Learn about vectors in C++, a dynamic array.',
    code: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> vec = {1, 2, 3, 4, 5};
    for (int i = 0; i < vec.size(); i++) {
        cout << vec[i] << " ";
    }
    return 0;
}`,
    quiz: [
      {
        question: 'Which container is used for dynamic arrays in C++?',
        options: ['vector', 'array', 'list', 'deque'],
        correctAnswer: 0
      },
      {
        question: 'How do you add an element to a vector in C++?',
        options: ['vec.push_back(value)', 'vec.add(value)', 'vec.insert(value)', 'vec.push(value)'],
        correctAnswer: 0
      },
      {
        question: 'What will happen if you access an element beyond the bounds of a vector?',
        options: ['The program will crash', 'A runtime error occurs', 'The vector will expand automatically', 'The result is undefined'],
        correctAnswer: 3
      },
      {
        question: 'How do you get the size of a vector in C++?',
        options: ['vec.size()', 'vec.length()', 'size(vec)', 'length(vec)'],
        correctAnswer: 0
      },
      {
        question: 'What type of storage does a vector use in C++?',
        options: ['Contiguous memory', 'Non-contiguous memory', 'Dynamic memory', 'None of the above'],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'sort',
    title: 'sort',
    description: 'Learn how to sort elements in a container using the sort function.',
    code: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> vec = {5, 3, 4, 1, 2};
    sort(vec.begin(), vec.end());
    for (int i = 0; i < vec.size(); i++) {
        cout << vec[i] << " ";
    }
    return 0;
}`,
    quiz: [
      {
        question: 'Which header file is needed for the sort function in C++?',
        options: ['<algorithm>', '<vector>', '<iostream>', '<list>'],
        correctAnswer: 0
      },
      {
        question: 'What does the sort function do in C++?',
        options: ['Sorts the elements in descending order', 'Sorts the elements in ascending order', 'Reverses the order of elements', 'Shuffles the elements'],
        correctAnswer: 1
      },
      {
        question: 'Which iterator is used for sorting a vector in C++?',
        options: ['vec.begin() and vec.end()', 'vec.front() and vec.back()', 'vec.begin() and vec.size()', 'None of the above'],
        correctAnswer: 0
      },
      {
        question: 'What happens if you call sort on a vector that is already sorted?',
        options: ['Nothing, it stays sorted', 'The vector will be reversed', 'The program will crash', 'An error will occur'],
        correctAnswer: 0
      },
      {
        question: 'How do you sort a vector in descending order?',
        options: ['sort(vec.rbegin(), vec.rend())', 'sort(vec.begin(), vec.end(), greater<int>())', 'sort(vec.begin(), vec.end(), less<int>())', 'sort(vec.reverse())'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'set',
    title: 'set',
    description: 'Learn about the set container, which stores unique elements in a sorted order.',
    code: `#include <iostream>
#include <set>
using namespace std;

int main() {
    set<int> s = {1, 2, 3, 4, 5};
    for (int val : s) {
        cout << val << " ";
    }
    return 0;
}`,
    quiz: [
      {
        question: 'Which C++ container stores unique elements in sorted order?',
        options: ['set', 'vector', 'list', 'deque'],
        correctAnswer: 0
      },
      {
        question: 'Can a set in C++ contain duplicate values?',
        options: ['Yes', 'No', 'Depends on the data type', 'Only integers'],
        correctAnswer: 1
      },
      {
        question: 'How do you insert elements into a set in C++?',
        options: ['set.insert(value)', 'set.push_back(value)', 'set.add(value)', 'set.push(value)'],
        correctAnswer: 0
      },
      {
        question: 'What happens when you insert a duplicate value into a set in C++?',
        options: ['It will overwrite the previous value', 'It will be ignored', 'The program will crash', 'The set will throw an exception'],
        correctAnswer: 1
      },
      {
        question: 'Which method removes an element from a set in C++?',
        options: ['set.erase(value)', 'set.remove(value)', 'set.delete(value)', 'set.removeAt(value)'],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'string',
    title: 'String',
    description: 'Learn how to manipulate strings in C++ using various string methods.',
    code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string str = "Hello, World!";
    cout << "String length: " << str.length() << endl;
    cout << "Substring: " << str.substr(7, 5) << endl;
    return 0;
}`,
    quiz: [
      {
        question: 'Which header file is needed to use the string class in C++?',
        options: ['<string>', '<iostream>', '<stdio>', '<vector>'],
        correctAnswer: 0
      },
      {
        question: 'What does the substr method do in C++?',
        options: ['Extracts a substring from a string', 'Concatenates two strings', 'Returns the string length', 'Reverses the string'],
        correctAnswer: 0
      },
      {
        question: 'Which method returns the length of a string?',
        options: ['length()', 'size()', 'capacity()', 'Both a and b'],
        correctAnswer: 3
      },
      {
        question: 'How can you convert a string to uppercase in C++?',
        options: ['Use the to_upper() function', 'Use the transform() function', 'Use the upper() function', 'Directly modify each character'],
        correctAnswer: 1
      },
      {
        question: 'Which function is used to compare two strings in C++?',
        options: ['compare()', 'strcmp()', 'equal()', 'compareTo()'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'pair',
    title: 'Pair',
    description: 'Learn how to use pairs to store two related values.',
    code: 
`#include <iostream>
#include <utility>
using namespace std;

int main() {
    pair<int, string> p = {1, "apple"};
    cout << "First: " << p.first << ", Second: " << p.second << endl;
    return 0;
}`,
    quiz: [
      {
        question: 'What type of values can a pair in C++ store?',
        options: ['Two of the same type', 'Two different types', 'Only integers', 'Only strings'],
        correctAnswer: 1
      },
      {
        question: 'Which header file is required to use pairs in C++?',
        options: ['<utility>', '<pair>', '<vector>', '<map>'],
        correctAnswer: 0
      },
      {
        question: 'How do you access the first value of a pair in C++?',
        options: ['p.first', 'p[0]', 'p.first()', 'p.firstValue'],
        correctAnswer: 0
      },
      {
        question: 'How do you access the second value of a pair in C++?',
        options: ['p.second', 'p[1]', 'p.second()', 'p.secondValue'],
        correctAnswer: 0
      },
      {
        question: 'Which of the following is true about pairs in C++?',
        options: ['A pair is immutable', 'A pair can only hold numbers', 'Pairs can hold two different types of data', 'None of the above'],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 'set-of-pairs',
    title: 'Set of pairs',
    description: 'Learn how to use a set to store pairs in C++.',
    code:
`#include <iostream>
#include <set>
#include <utility>
using namespace std;

int main() {
    set<pair<int, string>> s = {{1, "apple"}, {2, "banana"}, {3, "cherry"}};
    for (const auto& p : s) {
        cout << "First: " << p.first << ", Second: " << p.second << endl;
    }
    return 0;
}`,
    quiz: [
      {
        question: 'What is stored in a set of pairs in C++?',
        options: ['Pairs of two related values', 'Only unique pairs', 'Only sorted pairs', 'All of the above'],
        correctAnswer: 3
      },
      {
        question: 'How are pairs sorted in a set of pairs in C++?',
        options: ['By the first element of the pair', 'By the second element of the pair', 'Both elements are compared', 'Randomly'],
        correctAnswer: 0
      },
      {
        question: 'What happens when you try to insert a duplicate pair into a set of pairs?',
        options: ['The set will reject the duplicate', 'The duplicate will be added with a new index', 'The pair will overwrite the original pair', 'The program will crash'],
        correctAnswer: 0
      },
      {
        question: 'Which header file is required for set of pairs in C++?',
        options: ['<set>', '<pair>', '<vector>', '<map>'],
        correctAnswer: 0
      },
      {
        question: 'How do you print elements of a set of pairs in C++?',
        options: ['Using an iterator', 'Using a for loop', 'Using range-based for loop', 'All of the above'],
        correctAnswer: 3
      }
    ]
  },
  {
    id: 'rangeBasedFor',
    title: 'Range-Based For Loop',
    description: 'Learn how to use the range-based for loop in C++ to simplify iterating over arrays and collections.',
    code: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int arr[] = {10, 20, 30, 40, 50};\n\n    for (int num : arr) {\n        cout << num << " ";\n    }\n\n    return 0;\n}',
    quiz: [
      {
        question: 'Which keyword is used in the range-based for loop?',
        options: ['auto', 'foreach', 'in', 'None of the above'],
        correctAnswer: 0
      },
      {
        question: 'Which symbol is used in a range-based for loop to separate variable and container?',
        options: [':', '->', '<-', '=='],
        correctAnswer: 0
      },
      {
        question: 'Range-based for loop is mainly used to iterate over?',
        options: ['Arrays', 'Vectors', 'Strings', 'All of the above'],
        correctAnswer: 3
      }
    ]
  },
  {
    id: 'forEachLoop',
    title: 'For-Each Loop',
    description: 'For-Each loop in C++ is a simplified way to iterate over collections like arrays, vectors, and strings without using index variables.',
    code: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<string> names = {"Ali", "Sara", "Omar"};\n\n    for (auto name : names) {\n        cout << name << endl;\n    }\n\n    return 0;\n}',
    quiz: [
      {
        question: 'For-Each loop is another name for?',
        options: ['Range-Based For Loop', 'While Loop', 'Do-While Loop', 'None of the above'],
        correctAnswer: 0
      },
      {
        question: 'What is the main use of a range-based for loop in C++?',
        options: ['To repeat a block of code', 'To iterate over elements in a container', 'To create a function', 'To declare a variable'],
        correctAnswer: 1
      },
      {
        question: 'In for(auto x : arr), what does auto mean?',
        options: ['Automatic Data Type', 'Integer only', 'Char only', 'None of the above'],
        correctAnswer: 0
      }
    ]
  },
  
  {
    id: 'classes',
    title: 'Classes',
    description: 'Learn how to define and use classes in C++.',
    code: `#include <iostream>
using namespace std;

class Car {
public:
    string model;
    int year;

    void display() {
        cout << "Model: " << model << ", Year: " << year << endl;
    }
};

int main() {
    Car myCar;
    myCar.model = "Toyota";
    myCar.year = 2020;
    myCar.display();
    return 0;
}`,
    quiz: [
      {
        question: 'What is the main purpose of classes in C++?',
        options: ['To store multiple variables', 'To define objects with specific properties', 'To manipulate arrays', 'To use functions'],
        correctAnswer: 1
      },
      {
        question: 'Which keyword is used to define a class in C++?',
        options: ['class', 'object', 'struct', 'public'],
        correctAnswer: 0
      },
      {
        question: 'What is the default access level for members of a class in C++?',
        options: ['public', 'private', 'protected', 'none'],
        correctAnswer: 1
      },
      {
        question: 'Which of the following can be a class member in C++?',
        options: ['Variables', 'Functions', 'Both', 'None'],
        correctAnswer: 2
      },
      {
        question: 'How do you create an object of a class in C++?',
        options: ['Car myCar;', 'Car myCar()', 'Car *myCar;', 'None of the above'],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'inheritance',
    title: 'Inheritance',
    description: 'Learn how inheritance works in C++, allowing one class to inherit the properties of another.',
    code: `#include <iostream>
using namespace std;

class Animal {
public:
    void eat() {
        cout << "This animal is eating" << endl;
    }
};

class Dog : public Animal {
public:
    void bark() {
        cout << "The dog is barking" << endl;
    }
};

int main() {
    Dog myDog;
    myDog.eat();
    myDog.bark();
    return 0;
}`,
    quiz: [
      {
        question: 'What does inheritance allow in C++?',
        options: ['Sharing of data', 'Creation of subclasses', 'Sharing of functions and variables', 'All of the above'],
        correctAnswer: 3
      },
      {
        question: 'What is the syntax for defining a derived class in C++?',
        options: ['class DerivedClass : baseClass', 'class DerivedClass -> baseClass', 'class DerivedClass from baseClass', 'class DerivedClass [baseClass]'],
        correctAnswer: 0
      },
      {
        question: 'Which keyword is used to inherit from a base class in C++?',
        options: ['inherit', 'public', 'protected', 'private'],
        correctAnswer: 1
      },
      {
        question: 'In the example code, what is Dog in relation to Animal?',
        options: ['Base class', 'Derived class', 'Object', 'None'],
        correctAnswer: 1
      },
      {
        question: 'Which method will be inherited by the Dog class?',
        options: ['bark()', 'eat()', 'Neither', 'Both'],
        correctAnswer: 1
      }
    ]
  }
];