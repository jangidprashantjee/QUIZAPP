const questionObj = 
    {
      category: 'Food & Drink',
      id: 'qa-1',
      correctAnswer: 'Three',
      options: ['Two', 'Three', 'Four', 'Five'],
      question:
        "How many pieces of bun are in a Mcdonald's Big Mac?",
    };

let{correctAnswer, options, question}=questionObj;
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

options=shuffle(options);

let score=0;
const questionEl=document.getElementById("question");
const optionEl=document.getElementById("options");
const scoreEl=document.getElementById("score");


questionEl.textContent=question;

options.forEach((opt)=>{
  const btn=document.createElement('button');
  btn.textContent=opt;
  optionEl.appendChild(btn);
  btn.addEventListener('click',(event)=>{
     if(opt === correctAnswer)
     {
       score++;
     }
     else
     {
      score=score-0.25;
     }
     scoreEl.textContent=`Score :${score}`;
     questionEl.textContent = 'Quiz Completed!!';
     optionEl.textContent = '';
  });
});