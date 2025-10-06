
import React, { useState, useEffect } from 'react';
import './QuestModal.css';

interface QuestModalProps {
  quest: any;
  onClose: () => void;
  onComplete: (xp: number) => void;
}

const QuestModal: React.FC<QuestModalProps> = ({ quest, onClose, onComplete }) => {
  const [currentStep, setCurrentStep] = useState('reading'); // 'reading' or 'quiz'
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [quizResult, setQuizResult] = useState<boolean | null>(null);

  useEffect(() => {
    // Reset state when quest changes
    setCurrentStep('reading');
    setSelectedAnswers([]);
    setQuizResult(null);
  }, [quest]);

  const handleAnswerSelect = (questionIndex: number, answer: string) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = answer;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleSubmitQuiz = () => {
    let correctAnswers = 0;
    quest.quiz.forEach((q: any, index: number) => {
      if (selectedAnswers[index] === q.answer) {
        correctAnswers++;
      }
    });
    if (correctAnswers === quest.quiz.length) {
      setQuizResult(true);
      onComplete(quest.xp);
    } else {
      setQuizResult(false);
    }
  };

  return (
    <div className="quest-modal-overlay">
      <div className="quest-modal-content">
        <button onClick={onClose} className="modal-close-button">×</button>
        <h2>{quest.title}</h2>

        {currentStep === 'reading' && (
          <div className="reading-section">
            <h3>Reading Material</h3>
            <p>{quest.reading}</p>
            <button onClick={() => setCurrentStep('quiz')} className="modal-button">Start Quiz</button>
          </div>
        )}

        {currentStep === 'quiz' && (
          <div className="quiz-section">
            <h3>Quiz</h3>
            {quest.quiz.map((q: any, qIndex: number) => (
              <div key={qIndex} className="quiz-question">
                <p>{q.question}</p>
                <div className="quiz-options">
                  {q.options.map((option: string, oIndex: number) => (
                    <button
                      key={oIndex}
                      className={`quiz-option-button ${selectedAnswers[qIndex] === option ? 'selected' : ''}`}
                      onClick={() => handleAnswerSelect(qIndex, option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <button onClick={handleSubmitQuiz} className="modal-button">Submit Quiz</button>

            {quizResult !== null && (
              <div className="quiz-result">
                {quizResult ? (
                  <p className="success">Quiz Completed! You earned {quest.xp} XP!</p>
                ) : (
                  <p className="failure">Quiz Failed. Please try again.</p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestModal;
