import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Badge } from '../common/Badge';
import { CodeBlock } from '../common/CodeBlock';
import { CheatSheetModal } from '../common/CheatSheetModal';
import {
  HelpCircle,
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  ArrowLeft,
  RotateCcw, 
  BookOpen, 
  Award,
  Clock
} from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';
import { useLanguage } from '../../context/LanguageContext';

export const Chapter7Quiz: React.FC = () => {
  const { playTone, markChapterCompleted } = useProgress();
  const { t, isRTL } = useLanguage();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [userScore, setUserScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [isCheatSheetOpen, setIsCheatSheetOpen] = useState(false);

  const quizQuestions = t.quizQuestions;
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;

  const handleSelectOption = (optionId: string) => {
    if (isAnswerSubmitted) return;
    playTone('click');
    setSelectedOptionId(optionId);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOptionId || isAnswerSubmitted) return;
    setIsAnswerSubmitted(true);

    const isCorrect = selectedOptionId === currentQuestion.correctOptionId;
    if (isCorrect) {
      playTone('success');
      setUserScore(prev => prev + 1);
    } else {
      playTone('error');
    }
  };

  const handleNextQuestion = () => {
    playTone('step');
    if (isLastQuestion) {
      setIsQuizFinished(true);
      markChapterCompleted('quiz');
      
      // Fire confetti if passed with high score
      if (userScore >= 6) {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
      }
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOptionId(null);
      setIsAnswerSubmitted(false);
    }
  };

  const handleRetakeQuiz = () => {
    playTone('step');
    setCurrentQuestionIndex(0);
    setSelectedOptionId(null);
    setIsAnswerSubmitted(false);
    setUserScore(0);
    setIsQuizFinished(false);
  };

  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* Chapter Hero */}
      <div className="border-t-2 border-amber-400 bg-slate-900/40 border-x border-b border-slate-800 rounded-b-lg p-6 md:p-10">
        <div className="space-y-4 max-w-3xl">
          <div className="flex flex-wrap items-center gap-4">
            <Badge variant="amber" size="md">{t.chapter7.badge1}</Badge>
            <Badge variant="purple" size="md">{t.chapter7.badge2}</Badge>
            <span className="flex items-center gap-1.5 text-xs text-slate-500 font-mono"><Clock className="w-3 h-3" /> {t.chapter7.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-tight font-display">
            {t.chapter7.title} <span className="text-amber-400">{t.chapter7.titleAccent}</span>
          </h1>
          <p className="text-base md:text-lg text-slate-400 leading-relaxed">
            {t.chapter7.subtitle}
          </p>
        </div>
      </div>

      {!isQuizFinished ? (
        <div className="space-y-6">

          {/* Progress and Score Bar */}
          <div className="flex items-center justify-between p-4 rounded-lg bg-slate-900/40 border border-slate-800">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold text-cyan-400 uppercase">
                {t.chapter7.questionOf} {currentQuestionIndex + 1} / {quizQuestions.length}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-xs font-mono text-slate-400">
                {t.chapter7.score} <span className="font-semibold text-amber-400">{userScore}</span>
              </div>
              <div className="w-24 h-1 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-amber-400 transition-all duration-300"
                  style={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Active Question Card */}
          <div className="p-6 md:p-8 rounded-lg bg-slate-900/40 border border-slate-800 space-y-6">
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-amber-400">
                <HelpCircle className="w-4 h-4" />
                <span>{currentQuestion.title}</span>
              </div>
              <h2 className="text-lg md:text-xl font-semibold text-white leading-relaxed">
                {currentQuestion.scenario}
              </h2>
            </div>

            {/* Code Snippet */}
            {currentQuestion.codeSnippet && (
              <CodeBlock
                code={currentQuestion.codeSnippet}
                language="jsx"
              />
            )}

            {/* Multiple Choice Options */}
            <div className="space-y-3">
              {currentQuestion.options.map((option) => {
                const isSelected = selectedOptionId === option.id;
                const isCorrect = option.id === currentQuestion.correctOptionId;

                let optionStyles = 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700';

                if (isSelected && !isAnswerSubmitted) {
                  optionStyles = 'bg-cyan-950/40 border-cyan-500 text-cyan-200';
                } else if (isAnswerSubmitted) {
                  if (isCorrect) {
                    optionStyles = 'bg-emerald-950/60 border-emerald-500 text-emerald-200';
                  } else if (isSelected && !isCorrect) {
                    optionStyles = 'bg-rose-950/60 border-rose-500 text-rose-200';
                  } else {
                    optionStyles = 'bg-slate-950/40 border-slate-900 text-slate-600 opacity-60';
                  }
                }

                return (
                  <button
                    key={option.id}
                    onClick={() => handleSelectOption(option.id)}
                    disabled={isAnswerSubmitted}
                    className={`w-full p-4 rounded-lg border text-left rtl:text-right transition-all flex items-start gap-4 ${optionStyles}`}
                  >
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono font-semibold text-xs flex-shrink-0 mt-0.5 ${
                      isSelected ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {option.id}
                    </div>
                    <div className="flex-1 text-sm font-medium leading-relaxed">
                      {option.text}
                    </div>
                    {isAnswerSubmitted && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    )}
                    {isAnswerSubmitted && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Answer Explanation Box (Shown after submit) */}
            {isAnswerSubmitted && (
              <div className="p-5 rounded-lg bg-slate-950 border border-slate-800 space-y-3 animate-fadeIn">
                <div className="flex items-center gap-2 text-xs font-semibold font-mono">
                  {selectedOptionId === currentQuestion.correctOptionId ? (
                    <span className="text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" /> Correct Answer!
                    </span>
                  ) : (
                    <span className="text-rose-400 flex items-center gap-1.5">
                      <XCircle className="w-4 h-4" /> Incorrect
                    </span>
                  )}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {currentQuestion.options.find(o => o.id === currentQuestion.correctOptionId)?.explanation}
                </p>

                <div className="p-3 rounded-lg bg-amber-500/[0.03] border border-amber-900/40 text-xs text-amber-200/80 font-medium">
                  <span className="font-semibold">Key Takeaway:</span> {currentQuestion.keyTakeaway}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <span className="text-xs text-slate-500">
                {selectedOptionId ? t.chapter7.optionSelected : t.chapter7.chooseOption}
              </span>

              {!isAnswerSubmitted ? (
                <button
                  onClick={handleSubmitAnswer}
                  disabled={!selectedOptionId}
                  className="px-6 py-2.5 rounded-md bg-cyan-400 hover:bg-cyan-300 disabled:opacity-40 disabled:hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-colors"
                >
                  {t.chapter7.checkAnswer}
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-md bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold text-xs transition-colors"
                >
                  <span>{isLastQuestion ? t.chapter7.viewResults : t.chapter7.nextQuestion}</span>
                  {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              )}
            </div>

          </div>
        </div>
      ) : (
        /* Quiz Finished & Certification Screen */
        <div className="space-y-8 animate-fadeIn">
          
          <div className="p-8 md:p-12 rounded-lg border-t-2 border-t-amber-400 bg-slate-900/40 border-x border-b border-slate-800 text-center space-y-6">
            <Award className="w-10 h-10 mx-auto text-amber-400" />

            <div className="space-y-2 max-w-xl mx-auto">
              <Badge variant="amber" size="md">{t.chapter7.certTitle}</Badge>
              <h2 className="text-3xl md:text-4xl font-semibold text-white font-display">
                {userScore >= 6 ? t.chapter7.certMaster : t.chapter7.certPractitioner}
              </h2>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                {userScore >= 6 ? t.chapter7.certMasterDesc : t.chapter7.certPractitionerDesc}
              </p>
            </div>

            {/* Score Stats */}
            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-lg bg-slate-950 border border-slate-800">
              <div>
                <div className="text-xs text-slate-500">{t.chapter7.finalScore}</div>
                <div className="text-2xl font-semibold text-amber-400 font-mono">
                  {userScore} / {quizQuestions.length} ({Math.round((userScore / quizQuestions.length) * 100)}%)
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <button
                onClick={handleRetakeQuiz}
                className="flex items-center gap-2 px-5 py-2.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors border border-slate-700"
              >
                <RotateCcw className="w-4 h-4" />
                <span>{t.chapter7.retakeBtn}</span>
              </button>

              <button
                onClick={() => setIsCheatSheetOpen(true)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-md border border-slate-700 text-slate-200 hover:border-slate-600 hover:text-white text-xs font-semibold transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                <span>{t.chapter7.openCheatSheetBtn}</span>
              </button>
            </div>
          </div>

        </div>
      )}

      {/* Cheat Sheet Modal */}
      <CheatSheetModal
        isOpen={isCheatSheetOpen}
        onClose={() => setIsCheatSheetOpen(false)}
      />

    </div>
  );
};
