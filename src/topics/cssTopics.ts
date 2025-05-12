
export const cssTopics= [
  {
    id: 'importance-of-css',
    title: 'Importance of CSS',
    description: 'CSS is used to style HTML elements, making web pages visually appealing and responsive.',
    code: `<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f0f0f0;
      }
      h1 {
        color: #333;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <h1>Importance of CSS</h1>
    <p>CSS helps in designing web pages by controlling the layout and appearance of HTML elements.</p>
  </body>
</html>`,
    quiz: [
      {
        question: 'What does CSS stand for?',
        options: ['Cascading Style Sheets', 'Computer Style Sheets', 'Creative Style Sheets', 'Colorful Style Sheets'],
        correctAnswer: 0
      },
      {
        question: 'CSS is used for?',
        options: ['Styling the layout of web pages', 'Structure of web pages', 'Adding content to web pages', 'None of the above'],
        correctAnswer: 0
      },
      {
        question: 'Which CSS property is used to change the background color of a webpage?',
        options: ['background-color', 'color', 'font-size', 'border'],
        correctAnswer: 0
      },
      {
        question: 'What does the "C" in CSS stand for?',
        options: ['Cascading', 'Computer', 'Creative', 'Colorful'],
        correctAnswer: 0
      },
      {
        question: 'Which tag is used to link a CSS file in HTML?',
        options: ['<link>', '<style>', '<script>', '<css>'],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'css-syntax',
    title: 'CSS Syntax',
    description: 'CSS syntax is used to define the rules for styling HTML elements.',
    code: `<!DOCTYPE html>
<html>
  <head>
    <style>
      p {
        color: blue;
        font-size: 16px;
      }
    </style>
  </head>
  <body>
    <p>This is a paragraph with CSS styling.</p>
  </body>
</html>`,
    quiz: [
      {
        question: 'What is the correct syntax for a CSS rule?',
        options: ['selector { property: value; }', 'selector: { value: property; }', 'selector: property: value;', 'property { selector: value; }'],
        correctAnswer: 0
      },
      {
        question: 'Which of these is a valid CSS selector?',
        options: ['#id', '.class', 'div', 'All of the above'],
        correctAnswer: 3
      },
      {
        question: 'What is the property used to set the text color in CSS?',
        options: ['color', 'font-color', 'text-color', 'bg-color'],
        correctAnswer: 0
      },
      {
        question: 'What does the "font-size" property in CSS control?',
        options: ['Font color', 'Font style', 'Font size', 'Font weight'],
        correctAnswer: 2
      },
      {
        question: 'Which of these is NOT a CSS property?',
        options: ['color', 'font-size', 'background-color', 'text-style'],
        correctAnswer: 3
      }
    ]
  },
  {
    id: 'colors',
    title: 'CSS Colors',
    description: 'CSS allows various ways to specify colors, such as named colors, hexadecimal, RGB, and RGBA.',
    code: `<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        background-color: #f0f0f0;
      }
      h1 {
        color: rgb(0, 102, 204);
      }
      p {
        color: rgba(255, 0, 0, 0.5);
      }
    </style>
  </head>
  <body>
    <h1>This is a heading with RGB color</h1>
    <p>This is a paragraph with RGBA color.</p>
  </body>
</html>`,
    quiz: [
      {
        question: 'What does the RGB value "rgb(255, 0, 0)" represent?',
        options: ['Green', 'Blue', 'Red', 'Yellow'],
        correctAnswer: 2
      },
      {
        question: 'Which CSS property is used to change text color?',
        options: ['font-size', 'color', 'background-color', 'border'],
        correctAnswer: 1
      },
      {
        question: 'What is the correct syntax for specifying a color in hexadecimal?',
        options: ['#FFFFFF', 'rgb(255, 255, 255)', 'rgba(255, 255, 255, 1)', 'color(255, 255, 255)'],
        correctAnswer: 0
      },
      {
        question: 'Which of these is a valid CSS color value?',
        options: ['#ff0000', 'rgb(255, 0, 0)', 'rgba(255, 0, 0, 0.5)', 'All of the above'],
        correctAnswer: 3
      },
      {
        question: 'Which of these values is used for transparent colors in CSS?',
        options: ['rgb', 'rgba', 'hex', 'named colors'],
        correctAnswer: 1
      }
    ]
  },
  {
    id: 'box-model',
    title: 'CSS Box Model',
    description: 'The box model in CSS represents the rectangular boxes generated for elements, including margins, borders, padding, and content.',
    code: `<!DOCTYPE html>
<html>
  <head>
    <style>
      div {
        width: 200px;
        height: 100px;
        padding: 20px;
        border: 5px solid black;
        margin: 10px;
        background-color: lightblue;
      }
    </style>
  </head>
  <body>
    <div>This div follows the box model.</div>
  </body>
</html>`,
    quiz: [
      {
        question: 'What does the "margin" property in the box model do?',
        options: ['Adds space inside the element', 'Adds space around the element', 'Changes the element’s width', 'Changes the element’s color'],
        correctAnswer: 1
      },
      {
        question: 'What property adds space inside the element in the box model?',
        options: ['padding', 'margin', 'border', 'width'],
        correctAnswer: 0
      },
      {
        question: 'Which property adds a border around an element in the box model?',
        options: ['border', 'padding', 'margin', 'width'],
        correctAnswer: 0
      },
      {
        question: 'What is the correct order of the CSS box model from inside to outside?',
        options: ['Content, padding, border, margin', 'Content, margin, padding, border', 'Margin, border, content, padding', 'Padding, border, content, margin'],
        correctAnswer: 0
      },
      {
        question: 'What does the "width" property affect in the box model?',
        options: ['Content width only', 'Entire box including padding and border', 'Padding and border only', 'None of the above'],
        correctAnswer: 0
      }
    ]
  },
  {
    id: 'display',
    title: 'CSS Display Property',
    description: 'The display property controls how an element is displayed on the webpage.',
    code: `<!DOCTYPE html>
<html>
  <head>
    <style>
      .block {
        display: block;
        width: 100%;
      }
      .inline {
        display: inline;
      }
    </style>
  </head>
  <body>
    <div class="block">This is a block-level element.</div>
    <span class="inline">This is an inline element.</span>
  </body>
</html>`,
    quiz: [
      {
        question: 'What does the "display: block" property do?',
        options: ['Makes the element a block-level element', 'Makes the element inline', 'Makes the element invisible', 'Changes the element’s background color'],
        correctAnswer: 0
      },
      {
        question: 'Which of these is an inline element?',
        options: ['<div>', '<span>', '<section>', '<header>'],
        correctAnswer: 1
      },
      {
        question: 'What is the default display value for most HTML elements?',
        options: ['block', 'inline', 'none', 'inline-block'],
        correctAnswer: 1
      },
      {
        question: 'What happens when you set "display: none" for an element?',
        options: ['The element is hidden but still occupies space', 'The element is hidden and does not occupy any space', 'The element stays visible and takes up space', 'None of the above'],
        correctAnswer: 1
      },
      {
        question: 'Which display property makes an element behave like both block and inline elements?',
        options: ['display: block', 'display: inline', 'display: inline-block', 'display: none'],
        correctAnswer: 2
      }
    ]
  },
    
    {
      id: 'link-list-table',
      title: 'CSS Link, List, and Table Styling',
      description: 'CSS is used to style links, lists, and tables to enhance their appearance and behavior.',
      code: `<!DOCTYPE html>
  <html>
    <head>
      <style>
        a {
          color: blue;
          text-decoration: none;
        }
        a:hover {
          color: red;
        }
        ul {
          list-style-type: none;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th, td {
          border: 1px solid black;
          padding: 8px;
        }
      </style>
    </head>
    <body>
      <a href="#">This is a link</a>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
        <tr>
          <td>John</td>
          <td>25</td>
        </tr>
      </table>
    </body>
  </html>`,
      quiz: [
        {
          question: 'What does the "a:hover" CSS selector do?',
          options: ['Changes the text color when hovering over a link', 'Removes underline from the link', 'Adds padding to the link', 'Changes the background color'],
          correctAnswer: 0
        },
        {
          question: 'Which property is used to remove bullets from a list?',
          options: ['list-style-type: none', 'list-style: none', 'display: none', 'None of the above'],
          correctAnswer: 0
        },
        {
          question: 'How do you collapse borders in a table?',
          options: ['border-collapse: collapse;', 'border-style: collapse;', 'table-collapse: collapse;', 'None of the above'],
          correctAnswer: 0
        },
        {
          question: 'Which CSS property controls the spacing inside a table cell?',
          options: ['padding', 'margin', 'border', 'width'],
          correctAnswer: 0
        },
        {
          question: 'What does the "text-decoration: none" property do for links?',
          options: ['Removes the underline', 'Changes text color', 'Adds a border around the link', 'None of the above'],
          correctAnswer: 0
        }
      ]
    },
    {
      id: 'position',
      title: 'CSS Positioning',
      description: 'CSS provides various positioning methods, including static, relative, absolute, and fixed.',
      code: `<!DOCTYPE html>
  <html>
    <head>
      <style>
        .relative {
          position: relative;
          top: 20px;
          left: 20px;
        }
        .absolute {
          position: absolute;
          top: 50px;
          right: 50px;
        }
      </style>
    </head>
    <body>
      <div class="relative">This is a relative positioned element.</div>
      <div class="absolute">This is an absolute positioned element.</div>
    </body>
  </html>`,
      quiz: [
        {
          question: 'What does the "position: relative" property do?',
          options: ['Positions an element relative to its normal position', 'Positions an element relative to the viewport', 'Positions an element at the bottom of the page', 'None of the above'],
          correctAnswer: 0
        },
        {
          question: 'What does the "position: absolute" property do?',
          options: ['Positions an element relative to the nearest positioned ancestor', 'Positions an element relative to the viewport', 'Does not position the element', 'None of the above'],
          correctAnswer: 0
        },
        {
          question: 'Which of these positioning methods removes the element from the normal document flow?',
          options: ['absolute', 'relative', 'static', 'fixed'],
          correctAnswer: 0
        },
        {
          question: 'Which property is used to set an element’s position on the page?',
          options: ['position', 'top', 'left', 'z-index'],
          correctAnswer: 0
        },
        {
          question: 'What is the default positioning for most elements?',
          options: ['absolute', 'relative', 'static', 'fixed'],
          correctAnswer: 2
        }
      ]
    },
    {
      id: 'float',
      title: 'CSS Float Property',
      description: 'The float property is used to place elements next to each other horizontally.',
      code: `<!DOCTYPE html>
  <html>
    <head>
      <style>
        .left {
          float: left;
          width: 50%;
        }
        .right {
          float: right;
          width: 50%;
        }
      </style>
    </head>
    <body>
      <div class="left">This element floats to the left.</div>
      <div class="right">This element floats to the right.</div>
    </body>
  </html>`,
      quiz: [
        {
          question: 'What does the "float: left" property do?',
          options: ['Floats the element to the left', 'Aligns the element to the left of the page', 'Makes the element disappear', 'None of the above'],
          correctAnswer: 0
        },
        {
          question: 'What happens when two elements float next to each other?',
          options: ['They are placed next to each other', 'One element covers the other', 'They are stacked on top of each other', 'None of the above'],
          correctAnswer: 0
        },
        {
          question: 'Which CSS property clears floated elements?',
          options: ['clear', 'overflow', 'float', 'z-index'],
          correctAnswer: 0
        },
        {
          question: 'Which value of the float property makes the element float to the right?',
          options: ['right', 'left', 'center', 'inline'],
          correctAnswer: 0
        },
        {
          question: 'What is the main purpose of the float property in CSS?',
          options: ['Position elements side by side', 'Add spacing between elements', 'Create a background color for elements', 'Control font size'],
          correctAnswer: 0
        }
      ]
    },
    {
      id: 'id-vs-class',
      title: 'CSS ID vs Class Selectors',
      description: 'ID and class selectors are used to target elements, but they differ in terms of uniqueness and usage.',
      code: `<!DOCTYPE html>
  <html>
    <head>
      <style>
        #unique {
          color: red;
        }
        .common {
          color: green;
        }
      </style>
    </head>
    <body>
      <div id="unique">This element has a unique ID.</div>
      <div class="common">This element has a common class.</div>
    </body>
  </html>`,
      quiz: [
        {
          question: 'Which selector targets only one unique element on the page?',
          options: ['#id', '.class', 'element', '*'],
          correctAnswer: 0
        },
        {
          question: 'Which selector targets multiple elements on the page?',
          options: ['#id', '.class', 'element', '*'],
          correctAnswer: 1
        },
        {
          question: 'Which of the following is correct for ID selectors in CSS?',
          options: ['#idName', '.className', 'elementName', 'None of the above'],
          correctAnswer: 0
        },
        {
          question: 'Which of the following is correct for class selectors in CSS?',
          options: ['#className', '.className', 'elementName', 'None of the above'],
          correctAnswer: 1
        },
        {
          question: 'Which selector is more specific in CSS?',
          options: ['ID', 'Class', 'Element', 'None of the above'],
          correctAnswer: 0
        }
      ]
    },
    {
      id: 'flexbox',
      title: 'CSS Flexbox',
      description: 'Flexbox is a layout model that allows for easy alignment and distribution of space within a container.',
      code: `<!DOCTYPE html>
  <html>
    <head>
      <style>
        .container {
          display: flex;
          justify-content: space-between;
        }
        .box {
          width: 30%;
          background-color: lightblue;
          padding: 20px;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="box">Box 1</div>
        <div class="box">Box 2</div>
        <div class="box">Box 3</div>
      </div>
    </body>
  </html>`,
      quiz: [
        {
          question: 'Which property makes a container a flex container?',
          options: ['display: flex;', 'display: block;', 'display: inline;', 'None of the above'],
          correctAnswer: 0
        },
        {
          question: 'What does "justify-content: space-between" do?',
          options: ['Aligns items to the center', 'Adds equal space between items', 'Aligns items at the start', 'None of the above'],
          correctAnswer: 1
        },
        {
          question: 'Which property controls the alignment of flex items along the cross axis?',
          options: ['align-items', 'justify-content', 'flex-wrap', 'align-self'],
          correctAnswer: 0
        },
        {
          question: 'What is the default value of "flex-direction"?',
          options: ['row', 'column', 'row-reverse', 'column-reverse'],
          correctAnswer: 0
        },
        {
          question: 'Which of these is a valid value for "justify-content"?',
          options: ['center', 'flex-start', 'space-between', 'All of the above'],
          correctAnswer: 3
        }
      ]
    },
    {
      id: 'grid',
      title: 'CSS Grid Layout',
      description: 'CSS Grid provides a two-dimensional layout system for web design, allowing you to create complex layouts easily.',
      code: `<!DOCTYPE html>
  <html>
    <head>
      <style>
        .container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }
        .box {
          background-color: lightgreen;
          padding: 20px;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="box">Item 1</div>
        <div class="box">Item 2</div>
        <div class="box">Item 3</div>
      </div>
    </body>
  </html>`,
      quiz: [
        {
          question: 'What property is used to define a grid container?',
          options: ['display: grid;', 'grid-layout: grid;', 'container: grid;', 'grid-container: grid;'],
          correctAnswer: 0
        },
        {
          question: 'What does "grid-template-columns: repeat(3, 1fr);" do?',
          options: ['Defines 3 equal-width columns', 'Defines 3 rows', 'Sets the number of items in the grid', 'None of the above'],
          correctAnswer: 0
        },
        {
          question: 'What is the default value of "grid-template-columns"?',
          options: ['auto', 'None', 'repeat(1, 1fr)', 'None of the above'],
          correctAnswer: 1
        },
        {
          
          question: 'What does the "grid-template-rows" property define? ',
          options: ['Defines the number of columns in the grid', 'Defines the space between grid items', 'Defines the number of rows in the grid', 'None of the above'],
          correctAnswer: 2
        }
      ]
    },
    {
      id: 'transition',
      title: 'CSS Transition Property',
      description: 'The transition property allows you to change property values smoothly (over a given duration).',
      code: `<!DOCTYPE html>
  <html>
    <head>
      <style>
        .box {
          width: 100px;
          height: 100px;
          background-color: lightcoral;
          transition: background-color 0.5s ease;
        }
        .box:hover {
          background-color: lightgreen;
        }
      </style>
    </head>
    <body>
      <div class="box"></div>
    </body>
  </html>`,
      quiz: [
        {
          question: 'What does the transition property do in CSS?',
          options: ['Smoothly changes property values', 'Changes the background color instantly', 'Adds animation to an element', 'None of the above'],
          correctAnswer: 0
        },
        {
          question: 'Which property defines the duration of a transition?',
          options: ['transition-duration', 'transition-time', 'animation-duration', 'None of the above'],
          correctAnswer: 0
        },
        {
          question: 'What is the default value of the transition-timing-function?',
          options: ['linear', 'ease', 'ease-in', 'ease-out'],
          correctAnswer: 1
        },
        {
          question: 'Which event triggers a transition effect when applied to an element?',
          options: ['hover', 'focus', 'click', 'None of the above'],
          correctAnswer: 0
        },
        {
          question: 'What happens if no timing function is specified for the transition?',
          options: ['The default value "ease" is used', 'The transition happens instantly', 'It has no effect', 'None of the above'],
          correctAnswer: 0
        }
      ]
    },
    {
      id: 'transform',
      title: 'CSS Transform Property',
      description: 'The transform property allows you to modify the position, size, and shape of an element.',
      code: `<!DOCTYPE html>
  <html>
    <head>
      <style>
        .box {
          width: 100px;
          height: 100px;
          background-color: lightblue;
          transition: transform 0.5s ease;
        }
        .box:hover {
          transform: rotate(45deg);
        }
      </style>
    </head>
    <body>
      <div class="box"></div>
    </body>
  </html>`,
      quiz: [
        {
          question: 'What does the "transform" property do?',
          options: ['Modifies the position, size, and shape of an element', 'Changes the background color of an element', 'Resizes an element', 'None of the above'],
          correctAnswer: 0
        },
        {
          question: 'What effect does "rotate(45deg)" have on an element?',
          options: ['Rotates the element by 45 degrees', 'Changes the element’s position', 'Makes the element invisible', 'None of the above'],
          correctAnswer: 0
        },
        {
          question: 'Which CSS property is used to change the size of an element?',
          options: ['scale', 'transform', 'resize', 'None of the above'],
          correctAnswer: 0
        },
        {
          question: 'What does "transform: translate(50px, 50px);" do?',
          options: ['Moves the element 50px to the right and 50px down', 'Resizes the element by 50px', 'Changes the color of the element', 'None of the above'],
          correctAnswer: 0
        },
        {
          question: 'Which of these is NOT a valid transform function?',
          options: ['rotate()', 'translate()', 'resize()', 'scale()'],
          correctAnswer: 2
        }
      ]
    },
    {
      id: 'animation',
      title: 'CSS Animation Property',
      description: 'CSS animations allow you to change an element’s properties over a period of time.',
      code: `<!DOCTYPE html>
  <html>
    <head>
      <style>
        .box {
          width: 100px;
          height: 100px;
          background-color: yellow;
          animation: slide 2s infinite;
        }
  
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(300px); }
        }
      </style>
    </head>
    <body>
      <div class="box"></div>
    </body>
  </html>`,
      quiz: [
        {
          question: 'What does the animation property in CSS do?',
          options: ['Changes an element’s properties over time', 'Makes an element disappear', 'Changes the color of an element', 'None of the above'],
          correctAnswer: 0
        },
        {
          question: 'Which rule is used to define keyframes for an animation?',
          options: ['@keyframes', '@anim', '@animation', 'None of the above'],
          correctAnswer: 0
        },
        {
          question: 'What is the default value of the animation-iteration-count?',
          options: ['infinite', '1', '0', 'none'],
          correctAnswer: 1
        },
        {
          question: 'Which CSS property defines the time taken to complete one cycle of an animation?',
          options: ['animation-duration', 'animation-time', 'transition-duration', 'None of the above'],
          correctAnswer: 0
        },
        {
          question: 'Which of these is a valid value for the animation-timing-function?',
          options: ['linear', 'ease', 'ease-in', 'All of the above'],
          correctAnswer: 3
        }
      ]
    },
    {
      id: 'media-query',
      title: 'CSS Media Queries',
      description: 'Media queries allow you to apply different styles depending on the device’s characteristics, such as screen size.',
      code: `<!DOCTYPE html>
  <html>
    <head>
      <style>
        body {
          background-color: lightyellow;
        }
  
        @media (max-width: 600px) {
          body {
            background-color: lightpink;
          }
        }
      </style>
    </head>
    <body>
      <h1>Resize the window to change the background color!</h1>
    </body>
  </html>`,
      quiz: [
        {
          question: 'What does a media query do in CSS?',
          options: ['Applies different styles based on device characteristics', 'Modifies the content of an element', 'Changes the color of text', 'None of the above'],
          correctAnswer: 0
        },
        {
          question: 'Which media query applies styles for devices with a screen width of 600px or less?',
          options: ['@media (max-width: 600px)', '@media (min-width: 600px)', '@media (width: 600px)', 'None of the above'],
          correctAnswer: 0
        },
        {
          question: 'What property can be used inside a media query?',
          options: ['background-color', 'font-size', 'width', 'All of the above'],
          correctAnswer: 3
        },
        {
          question: 'Which of these is a valid media query for targeting screen sizes above 1024px?',
          options: ['@media (min-width: 1024px)', '@media (max-width: 1024px)', '@media (width: 1024px)', 'None of the above'],
          correctAnswer: 0
        },
        {
          question: 'What is the default behavior for elements when no media query is applied?',
          options: ['They follow the global CSS rules', 'They hide', 'They change their layout', 'None of the above'],
          correctAnswer: 0
        }
      ]
    },
    {
      id: 'responsive-images',
      title: 'Responsive Images',
      description: 'Responsive images adjust automatically based on the size of the viewing device.',
      code: `<!DOCTYPE html>
  <html>
    <head>
      <style>
        img {
          width: 100%;
          height: auto;
        }
      </style>
    </head>
    <body>
      <img src="image.jpg" alt="Responsive Image">
    </body>
  </html>`,
      quiz: [
        {
          question: 'What does setting "width: 100%" do for an image?',
          options: ['Makes the image adjust to the width of the container', 'Resizes the image to a fixed width', 'Hides the image', 'None of the above'],
          correctAnswer: 0
        },
        {
          question: 'Why is the height of the image set to "auto" in responsive images?',
          options: ['To maintain the aspect ratio', 'To make the image larger', 'To make the image smaller', 'None of the above'],
          correctAnswer: 0
        },
        {
          question: 'Which HTML attribute specifies the image source?',
          options: ['src', 'href', 'alt', 'title'],
          correctAnswer: 0
        },
        {
          question: 'What happens if you don’t set a height for a responsive image?',
          options: ['It automatically adjusts the height to maintain the aspect ratio', 'The image is not displayed', 'It becomes a square', 'None of the above'],
          correctAnswer: 0
        },
        {
          question: 'Which of these is the correct way to make an image responsive?',
          options: ['Set width to 100% and height to auto', 'Set width to auto and height to 100%', 'Use fixed pixel values for width and height', 'None of the above'],
          correctAnswer: 0
        }
      ]
    }
  ];