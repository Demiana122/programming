export const pythonTopics = [
  {
    id: 'print',
    title: 'Print Statement',
    description: 'The print() function is used to display output in Python.',
    code: `print("Hello, World!")\nprint(5 + 3)`,
    quiz: [
      {
        question: 'Which function is used to display output in Python?',
        options: ['echo()', 'print()', 'output()', 'display()'],
        correctAnswer: 1
      },
      {
        question: 'What does print(5 + 3) output?',
        options: ['53', '5 + 3', '8', 'Error'],
        correctAnswer: 2
      },
      {
        question: 'Is print() a built-in function in Python?',
        options: ['Yes', 'No'],
        correctAnswer: 0
      },
      {
        question: 'Can print() display multiple values?',
        options: ['Yes', 'No'],
        correctAnswer: 0
      },
      {
        question: 'Which symbol is used inside print to format strings?',
        options: ['%', '@', '#', '&'],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'variables',
    title: 'Variables',
    description: 'Variables are used to store data values in Python.',
    code: `x = 5\ny = "Hello"\nprint(x)\nprint(y)`,
    quiz: [
      {
        question: 'How do you create a variable in Python?',
        options: ['var x = 5', 'x := 5', 'x = 5', 'declare x = 5'],
        correctAnswer: 2
      },
      {
        question: 'Which symbol is used for assignment in Python?',
        options: ['=', '==', ':=', '->'],
        correctAnswer: 0
      },
      {
        question: 'Can variable names start with a number?',
        options: ['Yes', 'No'],
        correctAnswer: 1
      },
      {
        question: 'Which of the following is a valid variable name?',
        options: ['2name', 'name$', 'name_1', 'name space'],
        correctAnswer: 2
      },
      {
        question: 'Is Python case-sensitive in variable names?',
        options: ['Yes', 'No'],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'input',
    title: 'Python Input',
    description: 'The input() function allows the user to input data.',
    code: `name = input("Enter your name: ")\nprint("Hello, " + name)`,
    quiz: [
      {
        question: 'Which function is used to take input from the user?',
        options: ['get()', 'input()', 'scan()', 'read()'],
        correctAnswer: 1
      },
      {
        question: 'What data type is returned by input()?',
        options: ['int', 'float', 'str', 'bool'],
        correctAnswer: 2
      },
      {
        question: 'How do you convert input to an integer?',
        options: ['int()', 'str()', 'float()', 'bool()'],
        correctAnswer: 0
      },
      {
        question: 'Is input() blocking until user enters data?',
        options: ['Yes', 'No'],
        correctAnswer: 0
      },
      {
        question: 'Can input() be used without a prompt?',
        options: ['Yes', 'No'],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'list',
    title: 'List',
    description: 'Lists are used to store multiple items in a single variable.',
    code: `my_list = [1, 2, 3, 4]\nprint(my_list[0])\nmy_list.append(5)\nprint(my_list)`,
    quiz: [
      {
        question: 'Which symbol is used to define a list?',
        options: ['()', '[]', '{}', '<>'],
        correctAnswer: 1
      },
      {
        question: 'Which method adds an item to a list?',
        options: ['add()', 'insert()', 'append()', 'push()'],
        correctAnswer: 2
      },
      {
        question: 'Can lists contain multiple data types?',
        options: ['Yes', 'No'],
        correctAnswer: 0
      },
      {
        question: 'How to access the first element of a list?',
        options: ['list[1]', 'list[0]', 'list(first)', 'list{0}'],
        correctAnswer: 1
      },
      {
        question: 'Which method removes the last item of a list?',
        options: ['remove()', 'delete()', 'pop()', 'clear()'],
        correctAnswer: 2
      }
    ]
  },
  {
    id: 'tuple',
    title: 'Tuple',
    description: 'Tuples are immutable sequences, used to store multiple items.',
    code: `my_tuple = (1, 2, 3)\nprint(my_tuple[0])`,
    quiz: [
      {
        question: 'What is a tuple in Python?',
        options: ['A mutable sequence', 'An immutable sequence', 'A dictionary', 'A set'],
        correctAnswer: 1
      },
      {
        question: 'Can you modify a tuple after creation?',
        options: ['Yes', 'No'],
        correctAnswer: 1
      },
      {
        question: 'What is the symbol used to define a tuple?',
        options: ['()', '[]', '{}', '<>'],
        correctAnswer: 0
      },
      {
        question: 'How do you access the first element of a tuple?',
        options: ['tuple[0]', 'tuple[1]', 'tuple.first()', 'tuple{0}'],
        correctAnswer: 0
      },
      {
        question: 'Which of the following is a valid tuple?',
        options: ['(1, 2, 3)', '[1, 2, 3]', '{1, 2, 3}', '<1, 2, 3>'],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'set',
    title: 'Set',
    description: 'Sets are unordered collections of unique elements.',
    code: `my_set = {1, 2, 3}\nmy_set.add(4)\nprint(my_set)`,
    quiz: [
      {
        question: 'What is a set in Python?',
        options: ['An ordered collection', 'An unordered collection of unique items', 'A dictionary', 'A tuple'],
        correctAnswer: 1
      },
      {
        question: 'Which method is used to add an item to a set?',
        options: ['append()', 'insert()', 'add()', 'push()'],
        correctAnswer: 2
      },
      {
        question: 'Can a set contain duplicate values?',
        options: ['Yes', 'No'],
        correctAnswer: 1
      },
      {
        question: 'Which symbol is used to define a set?',
        options: ['()', '[]', '{}', '<>'],
        correctAnswer: 2
      },
      {
        question: 'What does my_set.add(4) do?',
        options: ['Removes 4', 'Adds 4 if it’s not present', 'Does nothing', 'Creates a new set'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'import',
    title: 'Import Statement',
    description: 'The import statement allows you to include external libraries in your Python program.',
    code: `import math\nprint(math.sqrt(16))`,
    quiz: [
      {
        question: 'What is the purpose of the import statement in Python?',
        options: ['Import external libraries', 'Define a new function', 'Create a variable', 'Execute code'],
        correctAnswer: 0
      },
      {
        question: 'Which library is imported in the example?',
        options: ['math', 'sys', 'os', 'random'],
        correctAnswer: 0
      },
      {
        question: 'How do you use a function from an imported library?',
        options: ['library.function()', 'function.library()', 'import.function()', 'None of the above'],
        correctAnswer: 0
      },
      {
        question: 'Can you import specific functions from a module?',
        options: ['Yes', 'No'],
        correctAnswer: 0
      },
      {
        question: 'Which of the following is a valid import statement?',
        options: ['import math', 'include math', 'import("math")', 'load math'],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'function',
    title: 'Functions',
    description: 'Functions are used to organize code into reusable blocks.',
    code: `def greet(name):\n    return "Hello, " + name\nprint(greet("Alice"))`,
    quiz: [
      {
        question: 'How do you define a function in Python?',
        options: ['function greet()', 'def greet()', 'func greet()', 'None of the above'],
        correctAnswer: 1
      },
      {
        question: 'What does the greet function return?',
        options: ['Hello', 'Hello, name', 'Name', 'None'],
        correctAnswer: 1
      },
      {
        question: 'Can a function have multiple return statements?',
        options: ['Yes', 'No'],
        correctAnswer: 0
      },
      {
        question: 'What is the purpose of functions?',
        options: ['To print output', 'To perform operations on data', 'To make code reusable and modular', 'None of the above'],
        correctAnswer: 2
      },
      {
        question: 'What is the correct way to call the greet function?',
        options: ['greet()', 'greet("Alice")', 'call greet("Alice")', 'None of the above'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'global_variables',
    title: 'Global Variables',
    description: 'Global variables are variables that are declared outside of a function and can be accessed throughout the program.',
    code: `x = 10\ndef func():\n    global x\n    x = 20\nfunc()\nprint(x)`,
    quiz: [
      {
        question: 'What is a global variable?',
        options: ['A variable declared inside a function', 'A variable declared outside a function', 'A variable accessible only in a function', 'None of the above'],
        correctAnswer: 1
      },
      {
        question: 'Which keyword is used to modify a global variable inside a function?',
        options: ['global', 'static', 'public', 'extern'],
        correctAnswer: 0
      },
      {
        question: 'What does the function func() modify in the example?',
        options: ['x', 'y', 'z', 'Nothing'],
        correctAnswer: 0
      },
      {
        question: 'Can a global variable be accessed inside a function?',
        options: ['Yes', 'No'],
        correctAnswer: 0
      },
      {
        question: 'What will be the value of x after the function call?',
        options: ['10', '20', '0', 'None'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'inheritance',
    title: 'Inheritance',
    description: 'Inheritance allows one class to inherit the properties and methods of another class.',
    code: `class Animal:\n    def speak(self):\n        print("Animal speaks")\n\nclass Dog(Animal):\n    def speak(self):\n        print("Dog barks")\n\nobj = Dog()\nobj.speak()`,
    quiz: [
      {
        question: 'What does inheritance allow you to do?',
        options: ['Create new functions', 'Modify variables', 'Reuse code from another class', 'None of the above'],
        correctAnswer: 2
      },
      {
        question: 'Which class does Dog inherit from in the example?',
        options: ['Dog', 'Animal', 'Speak', 'None'],
        correctAnswer: 1
      },
      {
        question: 'What will obj.speak() print?',
        options: ['Animal speaks', 'Dog barks', 'Error', 'Nothing'],
        correctAnswer: 1
      },
      {
        question: 'Can a subclass override a method from the superclass?',
        options: ['Yes', 'No'],
        correctAnswer: 0
      },
      {
        question: 'What is the keyword used to inherit from another class?',
        options: ['super', 'inherit', 'extends', 'None'],
        correctAnswer: 0
      }
    ]
  }
];