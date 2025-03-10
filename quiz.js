const questionJSON = [
  {
    correctAnswer: 'Three ',
    options: ['Two', 'Three ', 'Four', 'Five'],
    question:
      "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: 'L. Frank Baum',
    options: [
      'Suzanne Collins',
      'James Fenimore Cooper',
      'L. Frank Baum',
      'Donna Leon',
    ],
    question:
      "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: 'Atlanta United',
    options: [
      'Atlanta United',
      'Atlanta Impact',
      'Atlanta Bulls',
      'Atlanta Stars',
    ],
    question:
      'Which of these is a soccer team based in Atlanta?',
  },
  {
    correctAnswer: 'A Nanny',
    options: [
      'A Sow',
      'A Lioness',
      'A Hen',
      'A Nanny',
    ],
    question: 'A female goat is known as what?',
  },
  {
    correctAnswer: 'P. L. Travers',
    options: [
      'J. R. R. Tolkien',
      'P. L. Travers',
      'Lewis Carroll',
      'Enid Blyton',
    ],
    question:
      "Which author wrote 'Mary Poppins'?",
  },
];
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


let score=0;
let currentQuestion=0;
const questionEl=document.getElementById("question");
const optionEl=document.getElementById("options");
const scoreEl=document.getElementById("score");

function nextQuestion()
{
   currentQuestion++;
   optionEl.textContent = '';
   if(currentQuestion===questionJSON.length-1)
   {console.log(`completed`);questionEl.textContent='Quiz completed , Your Total score is mentioned below';
    optionEl.textContent='';
   }
   else{startQuiz();}
}

function startQuiz()
{
  let{correctAnswer, options, question}=questionJSON[currentQuestion];
  options=shuffle(options);
  questionEl.textContent=`Question ${currentQuestion+1} : ${question}`;
  options.forEach((opt)=>{
    const btn=document.createElement('button');
    btn.textContent=opt;
    optionEl.appendChild(btn);
    console.log(opt);
    btn.addEventListener('click',()=>{
       if(opt === correctAnswer)
       {
         score++;
       }
       else
       {
        score=score-0.25;
       }
       scoreEl.textContent=`Score :${score}`;
       nextQuestion();
       console.log(currentQuestion+1);
    });
  });
  //questionEl.textContent = 'Quiz Completed!!';
}

startQuiz();