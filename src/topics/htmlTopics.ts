export const htmlTopics = [
  {
    id: 'what-is-html',
    title: 'What is HTML?',
    description: 'HTML (HyperText Markup Language) is the standard markup language for creating web pages.',
    code: `<!DOCTYPE html>
<html>
  <head>
    <title>My First HTML Page</title>
    <meta charset="UTF-8">
  </head>
  <body>
    <h1>Welcome to HTML!</h1>
    <p>This is a paragraph.</p>
    <ul>
      <li>List item 1</li>
      <li>List item 2</li>
    </ul>
  </body>
</html>`,
    quiz: [
      {
        question: 'What does HTML stand for?',
        options: [
          'Hyper Text Markup Language',
          'High Tech Modern Language',
          'Hyper Transfer Markup Language',
          'Home Tool Markup Language'
        ],
        correctAnswer: 0
      },
      {
        question: 'Which of these tags defines the beginning of an HTML document?',
        options: ['<html>', '<head>', '<body>', '<h1>'],
        correctAnswer: 0
      },
      {
        question: 'Which tag is used to create a hyperlink?',
        options: ['<a>', '<p>', '<img>', '<h1>'],
        correctAnswer: 0
      },
      {
        question: 'Which tag is used to display an image?',
        options: ['<img>', '<p>', '<h1>', '<video>'],
        correctAnswer: 0
      },
      {
        question: 'Which of these is a block element?',
        options: ['<div>', '<span>', '<a>', '<img>'],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'how-to-learn-html',
    title: 'How to Learn HTML?',
    description: 'A beginner’s guide to learning HTML step by step.',
    code: `<!DOCTYPE html>
<html>
  <head>
    <title>Learning HTML</title>
  </head>
  <body>
    <h2>HTML is easy to learn</h2>
    <p>Start with simple elements, and practice regularly.</p>
  </body>
</html>`,
    quiz: [
      {
        question: 'Which of these tags defines the beginning of an HTML document?',
        options: ['<html>', '<head>', '<body>', '<h1>'],
        correctAnswer: 0
      },
      {
        question: 'Which tag is used to add a paragraph in HTML?',
        options: ['<p>', '<h1>', '<div>', '<span>'],
        correctAnswer: 0
      },
      {
        question: 'Which tag is used to create an ordered list in HTML?',
        options: ['<ul>', '<ol>', '<li>', '<dl>'],
        correctAnswer: 1
      },
      {
        question: 'Which tag is used to create an unordered list in HTML?',
        options: ['<ol>', '<ul>', '<li>', '<dl>'],
        correctAnswer: 1
      },
      {
        question: 'Which HTML tag is used to define the title of the webpage?',
        options: ['<title>', '<meta>', '<h1>', '<header>'],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'all-html-elements',
    title: 'HTML Elements',
    description: 'An overview of common HTML elements and their usage.',
    code: `<!DOCTYPE html>
<html>
  <head>
    <title>HTML Elements</title>
  </head>
  <body>
    <h1>All HTML Elements</h1>
    <p>This is a paragraph element.</p>
    <a href="https://www.example.com">Visit Example</a>
    <img src="image.jpg" alt="Image Example">
  </body>
</html>`,
    quiz: [
      {
        question: 'Which tag is used to create a hyperlink?',
        options: ['<a>', '<p>', '<img>', '<h1>'],
        correctAnswer: 0
      },
      {
        question: 'Which tag is used to embed an image?',
        options: ['<img>', '<video>', '<audio>', '<link>'],
        correctAnswer: 0
      },
      {
        question: 'What does the <a> tag do?',
        options: ['Creates a hyperlink', 'Adds an image', 'Defines a paragraph', 'Creates a header'],
        correctAnswer: 0
      },
      {
        question: 'Which tag is used for a clickable button?',
        options: ['<button>', '<input>', '<form>', '<select>'],
        correctAnswer: 0
      },
      {
        question: 'Which attribute is used to specify the link destination in <a> tag?',
        options: ['src', 'href', 'alt', 'target'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'html-elements-by-category',
    title: 'HTML Elements by Category',
    description: 'HTML elements categorized into structural, textual, form, and media.',
    code: `<!DOCTYPE html>
<html>
  <head>
    <title>HTML Elements by Category</title>
  </head>
  <body>
    <h1>Text Elements</h1>
    <p>This is a paragraph.</p>
    <h2>Media Elements</h2>
    <img src="image.jpg" alt="Image Example">
  </body>
</html>`,
    quiz: [
      {
        question: 'Which tag is used to display an image?',
        options: ['<img>', '<p>', '<h1>', '<video>'],
        correctAnswer: 0
      },
      {
        question: 'Which category does the <form> tag belong to?',
        options: ['Textual', 'Structural', 'Media', 'Form'],
        correctAnswer: 3
      },
      {
        question: 'Which category does the <header> tag belong to?',
        options: ['Textual', 'Structural', 'Form', 'Media'],
        correctAnswer: 1
      },
      {
        question: 'Which tag is used to define a paragraph?',
        options: ['<p>', '<h1>', '<span>', '<div>'],
        correctAnswer: 0
      },
      {
        question: 'Which tag is used for adding links in HTML?',
        options: ['<a>', '<link>', '<img>', '<button>'],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'html-exercises',
    title: 'HTML Exercises',
    description: 'Practical exercises to learn HTML and test your skills.',
    code: `<!DOCTYPE html>
<html>
  <head>
    <title>HTML Exercises</title>
  </head>
  <body>
    <h1>HTML Exercises</h1>
    <p>Create a simple webpage with a heading and paragraph.</p>
  </body>
</html>`,
    quiz: [
      {
        question: 'What tag is used for a heading in HTML?',
        options: ['<h1>', '<p>', '<div>', '<span>'],
        correctAnswer: 0
      },
      {
        question: 'What tag is used for a paragraph in HTML?',
        options: ['<p>', '<h1>', '<div>', '<span>'],
        correctAnswer: 0
      },
      {
        question: 'Which tag is used to define a hyperlink?',
        options: ['<a>', '<p>', '<img>', '<h1>'],
        correctAnswer: 0
      },
      {
        question: 'Which tag is used to display an image?',
        options: ['<img>', '<p>', '<h1>', '<video>'],
        correctAnswer: 0
      },
      {
        question: 'Which tag is used to create an unordered list?',
        options: ['<ul>', '<ol>', '<li>', '<dl>'],
        correctAnswer: 0
      }
    ]
  },
   
    {
      id: 'table',
      title: 'HTML Tables',
      description: 'Tables in HTML are used to display data in rows and columns.',
      code: `<!DOCTYPE html>
  <html>
    <body>
      <table border="1">
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
        <tr>
          <td>Ali</td>
          <td>22</td>
        </tr>
      </table>
    </body>
  </html>` ,
      quiz: [
        {
          question: 'Which tag is used to create a table in HTML?',
          options: ['<table>', '<tr>', '<td>', '<th>'],
          correctAnswer: 0
        },
        {
          question: 'Which tag is used for table row?',
          options: ['<table>', '<tr>', '<td>', '<th>'],
          correctAnswer: 1
        },
        {
          question: 'Which tag is used for table heading?',
          options: ['<td>', '<th>', '<tr>', '<caption>'],
          correctAnswer: 1
        },
        {
          question: 'Which tag is used for table data cell?',
          options: ['<td>', '<th>', '<tr>', '<caption>'],
          correctAnswer: 0
        },
        {
          question: 'What attribute adds a border to a table?',
          options: ['border', 'line', 'outline', 'frame'],
          correctAnswer: 0
        }
      ]
    },
  
    {
      id: 'merge',
      title: 'Merging Cells in Tables',
      description: 'Use colspan and rowspan to merge cells in a table.',
      code: `<!DOCTYPE html>
  <html>
    <body>
      <table border="1">
        <tr>
          <td colspan="2">Merged Cell</td>
        </tr>
        <tr>
          <td>Data 1</td>
          <td>Data 2</td>
        </tr>
      </table>
    </body>
  </html>` ,
      quiz: [
        {
          question: 'Which attribute merges columns in a table?',
          options: ['colspan', 'rowspan', 'merge', 'span'],
          correctAnswer: 0
        },
        {
          question: 'Which attribute merges rows in a table?',
          options: ['colspan', 'rowspan', 'merge', 'span'],
          correctAnswer: 1
        },
        {
          question: 'Can colspan and rowspan be used together?',
          options: ['Yes', 'No'],
          correctAnswer: 0
        },
        {
          question: 'What is the default value of colspan?',
          options: ['1', '0', '2', 'None'],
          correctAnswer: 0
        },
        {
          question: 'In which tag are colspan and rowspan used?',
          options: ['<td>', '<table>', '<th>', '<tr>'],
          correctAnswer: 0
        }
      ]
    },
      {
        id: 'lists',
        title: 'HTML Lists',
        description: 'HTML provides ordered, unordered, and description lists.',
        code: `<!DOCTYPE html>
    <html>
      <body>
        <h2>Unordered List</h2>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
        <h2>Ordered List</h2>
        <ol>
          <li>First</li>
          <li>Second</li>
        </ol>
      </body>
    </html>`,
        quiz: [
          {
            question: 'Which tag defines an ordered list?',
            options: ['<ul>', '<ol>', '<li>', '<list>'],
            correctAnswer: 1
          },
          {
            question: 'Which tag defines an unordered list?',
            options: ['<ul>', '<ol>', '<li>', '<list>'],
            correctAnswer: 0
          },
          {
            question: 'Which tag is used for a list item?',
            options: ['<ol>', '<ul>', '<li>', '<item>'],
            correctAnswer: 2
          },
          {
            question: 'What list type shows items with numbers?',
            options: ['Ordered List', 'Unordered List', 'Description List', 'Bullet List'],
            correctAnswer: 0
          },
          {
            question: 'What tag is used to create a description list?',
            options: ['<dl>', '<ul>', '<ol>', '<li>'],
            correctAnswer: 0
          }
        ]
      },
      {
        id: 'video',
        title: 'HTML Video',
        description: 'HTML allows embedding video using the <video> tag.',
        code: `<!DOCTYPE html>
    <html>
      <body>
        <h2>Embedding Video</h2>
        <video width="320" height="240" controls>
          <source src="movie.mp4" type="video/mp4">
        </video>
      </body>
    </html>`,
        quiz: [
          {
            question: 'Which tag is used to add a video in HTML?',
            options: ['<video>', '<media>', '<source>', '<movie>'],
            correctAnswer: 0
          },
          {
            question: 'Which attribute adds playback controls to a video?',
            options: ['autoplay', 'controls', 'loop', 'muted'],
            correctAnswer: 1
          },
          {
            question: 'Which tag is used to specify the video file?',
            options: ['<source>', '<track>', '<video>', '<media>'],
            correctAnswer: 0
          },
          {
            question: 'What video format is commonly supported?',
            options: ['.avi', '.mp4', '.flv', '.wmv'],
            correctAnswer: 1
          },
          {
            question: 'Which attribute is used for automatic video start?',
            options: ['controls', 'autoplay', 'loop', 'start'],
            correctAnswer: 1
          }
        ]
      },
      {
        id: 'semantics',
        title: 'HTML Semantics',
        description: 'Semantic elements clearly describe their meaning in HTML.',
        code: `<!DOCTYPE html>
    <html>
      <body>
        <header>
          <h1>My Website</h1>
        </header>
        <nav>Navigation Bar</nav>
        <main>Main Content</main>
        <footer>Footer Section</footer>
      </body>
    </html>`,
        quiz: [
          {
            question: 'Which tag defines the main content area?',
            options: ['<body>', '<main>', '<section>', '<div>'],
            correctAnswer: 1
          },
          {
            question: 'Which tag represents a navigation link section?',
            options: ['<nav>', '<footer>', '<header>', '<link>'],
            correctAnswer: 0
          },
          {
            question: 'Which tag is used for page footer?',
            options: ['<footer>', '<end>', '<bottom>', '<foot>'],
            correctAnswer: 0
          },
          {
            question: 'What tag defines introductory content?',
            options: ['<header>', '<intro>', '<main>', '<start>'],
            correctAnswer: 0
          },
          {
            question: 'Which tag defines a section in a document?',
            options: ['<section>', '<div>', '<article>', '<header>'],
            correctAnswer: 0
          }
        ]
      },
      {
        id: 'creating-html-forms',
        title: 'Creating HTML Forms',
        description: 'Learn how to create forms to gather user input in HTML.',
        code: `<!DOCTYPE html>
    <html>
      <body>
        <h2>HTML Form Example</h2>
        <form action="/submit_form">
          <label for="name">Name:</label><br>
          <input type="text" id="name" name="name"><br><br>
          <input type="submit" value="Submit">
        </form>
      </body>
    </html>`,
        quiz: [
          {
            question: 'Which tag is used to create an HTML form?',
            options: ['<form>', '<input>', '<submit>', '<label>'],
            correctAnswer: 0
          },
          {
            question: 'Which input type is used for a single line text field?',
            options: ['<input type="text">', '<input type="textarea">', '<input type="password">', '<input type="email">'],
            correctAnswer: 0
          },
          {
            question: 'What attribute defines the action of a form?',
            options: ['method', 'action', 'type', 'target'],
            correctAnswer: 1
          },
          {
            question: 'Which tag is used to define a clickable button?',
            options: ['<button>', '<input>', '<submit>', '<link>'],
            correctAnswer: 0
          },
          {
            question: 'What attribute is used for labeling form elements?',
            options: ['<label for="...">', '<name for="...">', '<input for="...">', '<form for="...">'],
            correctAnswer: 0
          }
        ]
      },
      {
        id: 'advanced-form-techniques',
        title: 'Advanced HTML Form Techniques',
        description: 'Explore advanced form techniques such as validation, input groups, and more.',
        code: `<!DOCTYPE html>
    <html>
      <body>
        <h2>Advanced Form Example</h2>
        <form>
          <label for="email">Email:</label><br>
          <input type="email" id="email" name="email" required><br><br>
          <label for="age">Age:</label><br>
          <input type="number" id="age" name="age" min="18" max="99" required><br><br>
          <input type="submit" value="Submit">
        </form>
      </body>
    </html>`,
        quiz: [
          {
            question: 'Which input type is used to collect email addresses?',
            options: ['<input type="email">', '<input type="text">', '<input type="url">', '<input type="password">'],
            correctAnswer: 0
          },
          {
            question: 'What attribute is used to specify the minimum acceptable value for an input?',
            options: ['min', 'max', 'value', 'required'],
            correctAnswer: 0
          },
          {
            question: 'What does the "required" attribute do for a form input?',
            options: ['Makes the field optional', 'Prevents the user from submitting the form without filling out this field', 'Validates the input as a number', 'None of the above'],
            correctAnswer: 1
          },
          {
            question: 'Which attribute restricts the input to a certain range of numbers?',
            options: ['max', 'min', 'range', 'step'],
            correctAnswer: 1
          },
          {
            question: 'What type of input allows the user to select multiple values from a list?',
            options: ['<input type="checkbox">', '<input type="radio">', '<select multiple>'],
            correctAnswer: 2
          }
        ]
      }
    ];
