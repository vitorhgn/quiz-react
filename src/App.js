import {useState} from "react";
import './App.css';


const questions = [
  {
    questionText: "Quem foi a primeira pessoa a viajar no Espaço?",
    answerOptions: [
      { answerText: "Yuri Gagarin", isCorrect: true },
      { answerText: "A cadela Laika", isCorrect: false },
      { answerText: "Neil Armstrong", isCorrect: false },
      { answerText: "Marcos Pontes", isCorrect: false },
    ],
  },
  {
    questionText:
      "Qual a montanha mais alta do mundo?",
    answerOptions: [
      { answerText: "Mauna Kea", isCorrect: false },
      { answerText: "Dhaulagiri", isCorrect: false },
      { answerText: "Monte Everest", isCorrect: true },
      { answerText: "Monte Chimborazo", isCorrect: false },
    ],
  },
  {
    questionText: "Onde se localiza Machu Picchu?",
    answerOptions: [
      { answerText: "Colômbia", isCorrect: false },
      { answerText: "Peru", isCorrect: true },
      { answerText: "China", isCorrect: false },
      { answerText: "Bolívia", isCorrect: false },
    ],
  },
  {
    questionText: "A que temperatura a água ferve?",
    answerOptions: [
      { answerText: "200 ºC", isCorrect: false },
      { answerText: "-10 ºC", isCorrect: false },
      { answerText: "0 ºC", isCorrect: false },
      { answerText: "100 ºC", isCorrect: true },
    ],
  },
];


function App() {
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  function handleAnswer(isCorrect){
    if(isCorrect){
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion);
    }else{
      setShowScore(true); 
    }
  }
  function restart(){
    document.location.reload(true);
  }
  return (
  <div className="app">
    {
      showScore ? (
      <div className="show-score">
            <div className="score-section">
                Você pontunou {score} de {questions.length}
            </div>
            <div className="restart"> 
             <button onClick={()=> restart()}>Tentar novamente</button>
            </div>
      </div>
      ) : (
        <>
        <div className="question-section">
          <div className="question-count">
            <span>Questão: {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className="question-text">
            {
              questions[currentQuestion].questionText
            }
          </div>
        </div>

        <div className="answer-section">
            {
              questions[currentQuestion].answerOptions.map((answerOption, index) =>(
                <button onClick={()=> handleAnswer(answerOption.isCorrect)} key={index}>
                  {answerOption.answerText}
                </button>
              ))
            }
        </div>
        </>
      )
    }
  </div>
  );
}

export default App;
