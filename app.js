/* eslint-disable no-undef */
'use strict';

/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What color is broccoli?',
      answers: [
        'red',
        'orange',
        'pink',
        'green'
      ],
      correctAnswer: 'green'
    },
    {
      question: 'What is the current year?',
      answers: [
        '1970',
        '2015',
        '2020',
        '2005'
      ],
      correctAnswer: '2020'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates
function welcomeHTML() {
  return `
    <div class='welcome'>
      <p>
        Welcome User. Begin the quiz by pressing the button.
      </p>
     <button id="begin-quiz">Begin Quiz</button>
    </div>
    `;
}


/********** RENDER FUNCTION(S) **********/


// This function conditionally replaces the contents of the <main> tag based on the state of the store


// renders the quiz interface 
// includes first question
// possible answers with radio button inputs
// button to the next question
// which will be disabled if no input selected
function startQuiz(){
  console.log('the quiz has started');
  store.quizStarted = true;
  console.log(store.quizStarted);
  $('');
}



/********** EVENT HANDLER FUNCTIONS **********/
// These functions handle events (submit, click, etc)

// This function runs on the event of loading the page and displays the welcome message with the 
// button to begin the quiz.
function welcomeUser(){
  console.log('The page is loaded');
  $('main').html(welcomeHTML());
}


// This function will launch all other functions after the page is loaded
function launchQuiz (){
  $('main').on('click', '#begin-quiz', startQuiz);
}


$(welcomeUser);
$(launchQuiz);
