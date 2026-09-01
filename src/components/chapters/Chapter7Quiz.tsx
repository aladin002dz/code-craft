import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Award, CheckCircle2, XCircle, ChevronRight, RotateCcw, HelpCircle, Trophy, BookOpen } from 'lucide-react';
import { QUIZ_QUESTIONS } from '../../data/quizData';
import { CodeBlock } from '../common/CodeBlock';
import { Badge } from '../common/Badge';
import { useProgress } from '../../context/ProgressContext';
import { CheatSheetModal } from '../common/CheatSheetModal';

export const Chapter7Quiz: React.FC = () => {
  const { playTone, markChapterCompleted } = useProgress();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isCheatSheetOpen, setIsCheatSheetOpen] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];
  const totalQuestions = QUIZ_QUESTIONS.length;
  const currentSelectedOptionId = selectedAnswers[currentQ.id];

  const handleSelectOption = (optionId: string) => {
    if (showExplanation) return; // Prevent changing after submitting
    playTone('click');
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQ.id]: optionId
    }));
  };

  const handleCheckAnswer = () => {
    if (!currentSelectedOptionId) return;
    const isCorrect = currentSelectedOptionId === currentQ.correctOptionId;
    if (isCorrect) {
      playTone('success');
    } else {
      playTone('error');
    }
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    playTone('step');
    setShowExplanation(false);
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Finished Quiz!
      setIsFinished(true);
      markChapterCompleted('quiz');
      triggerConfetti();
    }
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  const handleRestartQuiz = () => {
    playTone('click');
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setShowExplanation(false);
    setIsFinished(false);
  };

  // Calculate score
  const correctCount = Object.entries(selectedAnswers).filter(
    ([qId, ans]) => {
      const q = QUIZ_QUESTIONS.find(item => item.id === Number(qId));
      return q && q.correctOptionId === ans;
    }
  ).length;

  const scorePercentage = Math.round((correctCount / totalQuestions) * 100);

  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* Chapter Hero */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-amber-950/40 via-slate-900/80 to-slate-950 border border-amber-800/40 p-6 md:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Trophy className="w-64 h-64 text-amber-400" />
        </div>
        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="amber" size="md">Module 7</Badge>
            <Badge variant="purple" size="md">Mastery Certification</Badge>
            <span className="text-xs text-slate-400 font-mono">⏱️ 8 Real-World Interview Questions</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Mastery <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">Quiz & Certification</span>
          </h1>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed">
            Test your deep understanding of closures, snapshots, batching, Fiber pointers, and immutable patterns.
          </p>
        </div>
      </div>

      {!isFinished ? (
        <div className="space-y-6">
          
          {/* Question Progression Bar */}
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">
              Question <strong className="text-cyan-400">{currentQuestionIndex + 1}</strong> of {totalQuestions}
            </span>
            <span className="text-slate-400">
              Score: <strong className="text-emerald-400">{correctCount}</strong> / {currentQuestionIndex}
            </span>
          </div>

          <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-amber-400 transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
            />
          </div>

          {/* Question Card */}
          <div className="p-6 md:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6">
            
            {/* Title & Scenario */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-amber-400" />
                <h2 className="text-xl font-bold text-white">{currentQ.title}</h2>
              </div>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                {currentQ.scenario}
              </p>
            </div>

            {/* Code Snippet */}
            {currentQ.codeSnippet && (
              <CodeBlock
                filename="QuestionCode.jsx"
                code={currentQ.codeSnippet}
                language="javascript"
              />
            )}

            {/* Options List */}
            <div className="space-y-3 pt-2">
              {currentQ.options.map((option) => {
                const isSelected = currentSelectedOptionId === option.id;
                const isCorrectOption = option.id === currentQ.correctOptionId;

                let optionStyles = 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700';

                if (showExplanation) {
                  if (isCorrectOption) {
                    optionStyles = 'bg-emerald-950/60 border-emerald-500 text-emerald-200 ring-2 ring-emerald-500/30';
                  } else if (isSelected && !isCorrectOption) {
                    optionStyles = 'bg-rose-950/60 border-rose-500 text-rose-200 ring-2 ring-rose-500/30';
                  } else {
                    optionStyles = 'bg-slate-950/40 border-slate-900 text-slate-600 opacity-60';
                  }
                } else if (isSelected) {
                  optionStyles = 'bg-cyan-950/80 border-cyan-500 text-cyan-200 ring-2 ring-cyan-500/30';
                }

                return (
                  <button
                    key={option.id}
                    onClick={() => handleSelectOption(option.id)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all duration-200 flex items-start gap-4 ${optionStyles}`}
                  >
                    <span className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-xs font-mono font-bold flex-shrink-0">
                      {option.id}
                    </span>
                    <div className="flex-1 text-sm md:text-base font-medium">
                      {option.text}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Explanation & Key Takeaway Banner */}
            {showExplanation && (
              <div className={`p-5 rounded-2xl border space-y-3 animate-fadeIn ${
                currentSelectedOptionId === currentQ.correctOptionId
                  ? 'bg-emerald-950/30 border-emerald-800/60 text-emerald-200'
                  : 'bg-rose-950/30 border-rose-800/60 text-rose-200'
              }`}>
                <div className="flex items-center gap-2 font-bold text-base">
                  {currentSelectedOptionId === currentQ.correctOptionId ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      <span className="text-emerald-300">Spot on! Excellent analysis.</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-rose-400" />
                      <span className="text-rose-300">Not quite! Here is the breakdown:</span>
                    </>
                  )}
                </div>

                <p className="text-sm leading-relaxed text-slate-300">
                  {currentQ.options.find(o => o.id === currentSelectedOptionId)?.explanation ||
                   currentQ.options.find(o => o.id === currentQ.correctOptionId)?.explanation}
                </p>

                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300">
                  <span className="text-amber-400 font-bold">💡 Key Takeaway:</span> {currentQ.keyTakeaway}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <span className="text-xs text-slate-500 font-mono">
                {currentSelectedOptionId ? 'Option selected' : 'Choose an option to continue'}
              </span>

              {!showExplanation ? (
                <button
                  onClick={handleCheckAnswer}
                  disabled={!currentSelectedOptionId}
                  className={`px-6 py-2.5 rounded-xl font-bold text-xs transition-all shadow-lg ${
                    currentSelectedOptionId
                      ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-cyan-500/20'
                      : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  Check Answer
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-400 hover:to-indigo-400 text-white font-bold text-xs transition-all shadow-lg shadow-purple-500/20"
                >
                  <span>{currentQuestionIndex < totalQuestions - 1 ? 'Next Question' : 'View Final Results'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>
        </div>
      ) : (
        /* Final Score Screen */
        <div className="p-8 md:p-12 rounded-3xl bg-slate-900 border border-slate-800 text-center space-y-8 animate-fadeIn shadow-2xl max-w-2xl mx-auto">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-amber-500 to-yellow-300 text-slate-950 flex items-center justify-center mx-auto shadow-2xl shadow-amber-500/30">
            <Award className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-black text-white">Quiz Completed!</h2>
            <p className="text-slate-400 text-sm">
              You scored <span className="text-amber-400 font-bold text-lg">{correctCount}</span> out of {totalQuestions} ({scorePercentage}%)
            </p>
          </div>

          {/* Certificate Card */}
          <div className="p-6 rounded-2xl bg-slate-950 border border-amber-500/40 space-y-4 shadow-xl text-left">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                React State Certification
              </span>
              <Badge variant={scorePercentage >= 75 ? 'emerald' : 'amber'}>
                {scorePercentage >= 75 ? 'Master Certified' : 'Practitioner'}
              </Badge>
            </div>
            
            <p className="text-sm text-slate-300 leading-relaxed">
              {scorePercentage >= 75
                ? 'Outstanding work! You have proven a deep and rigorous understanding of React state, snapshots, Fiber linked lists, and immutability.'
                : 'Great effort! Review the cheat sheet and re-take the tricky questions to achieve 100% mastery.'}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleRestartQuiz}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake Quiz</span>
            </button>

            <button
              onClick={() => setIsCheatSheetOpen(true)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-purple-500/25"
            >
              <BookOpen className="w-4 h-4" />
              <span>Open Cheat Sheet</span>
            </button>
          </div>

          <CheatSheetModal
            isOpen={isCheatSheetOpen}
            onClose={() => setIsCheatSheetOpen(false)}
          />
        </div>
      )}

    </div>
  );
};
