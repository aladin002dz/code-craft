import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Badge } from '../common/Badge';
import { CodeBlock } from '../common/CodeBlock';
import { CheatSheetModal } from '../common/CheatSheetModal';
import { 
  Trophy, 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  ArrowLeft,
  RotateCcw, 
  BookOpen, 
  Award
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
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-amber-950/40 via-slate-900/80 to-slate-950 border border-amber-800/40 p-6 md:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 rtl:right-auto rtl:left-0 p-8 opacity-10 pointer-events-none">
          <Trophy className="w-64 h-64 text-amber-400" />
        </div>
        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="amber" size="md">{t.chapter7.badge1}</Badge>
            <Badge variant="purple" size="md">{t.chapter7.badge2}</Badge>
            <span className="text-xs text-slate-400 font-mono">⏱️ {t.chapter7.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            {t.chapter7.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">{t.chapter7.titleAccent}</span>
          </h1>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed">
            {t.chapter7.subtitle}
          </p>
        </div>
      </div>

      {!isQuizFinished ? (
        <div className="space-y-6">
          
          {/* Progress and Score Bar */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase">
                {t.chapter7.questionOf} {currentQuestionIndex + 1} / {quizQuestions.length}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-xs font-mono text-slate-400">
                {t.chapter7.score} <span className="font-bold text-amber-400">{userScore}</span>
              </div>
              <div className="w-24 h-2 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-400 to-yellow-300 transition-all duration-300"
                  style={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Active Question Card */}
          <div className="p-6 md:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6">
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400">
                <HelpCircle className="w-4 h-4" />
                <span>{currentQuestion.title}</span>
              </div>
              <h2 className="text-lg md:text-xl font-bold text-white leading-relaxed">
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
                  optionStyles = 'bg-cyan-950/40 border-cyan-500 text-cyan-200 shadow-[0_0_15px_rgba(6,182,212,0.2)]';
                } else if (isAnswerSubmitted) {
                  if (isCorrect) {
                    optionStyles = 'bg-emerald-950/60 border-emerald-500 text-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.25)]';
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
                    className={`w-full p-4 rounded-2xl border text-left rtl:text-right transition-all flex items-start gap-4 ${optionStyles}`}
                  >
                    <div className={`w-7 h-7 rounded-xl flex items-center justify-center font-mono font-bold text-xs flex-shrink-0 mt-0.5 ${
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
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 animate-fadeIn">
                <div className="flex items-center gap-2 text-xs font-bold font-mono">
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

                <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-900/40 text-xs text-amber-200/90 font-medium">
                  💡 <span className="font-bold">Key Takeaway:</span> {currentQuestion.keyTakeaway}
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
                  className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 disabled:hover:bg-cyan-500 text-slate-950 font-bold text-xs transition-all shadow-lg shadow-cyan-500/20"
                >
                  {t.chapter7.checkAnswer}
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black text-xs transition-all shadow-lg shadow-amber-500/20"
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
          
          <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-b from-slate-900 via-amber-950/20 to-slate-900 border border-amber-500/40 shadow-2xl text-center space-y-6">
            <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center text-slate-950 shadow-xl shadow-amber-500/30">
              <Award className="w-10 h-10" />
            </div>

            <div className="space-y-2 max-w-xl mx-auto">
              <Badge variant="amber" size="md">{t.chapter7.certTitle}</Badge>
              <h2 className="text-3xl md:text-4xl font-black text-white">
                {userScore >= 6 ? t.chapter7.certMaster : t.chapter7.certPractitioner}
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {userScore >= 6 ? t.chapter7.certMasterDesc : t.chapter7.certPractitionerDesc}
              </p>
            </div>

            {/* Score Stats */}
            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-slate-950 border border-slate-800">
              <div>
                <div className="text-xs text-slate-400">{t.chapter7.finalScore}</div>
                <div className="text-2xl font-black text-amber-400 font-mono">
                  {userScore} / {quizQuestions.length} ({Math.round((userScore / quizQuestions.length) * 100)}%)
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <button
                onClick={handleRetakeQuiz}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all border border-slate-700"
              >
                <RotateCcw className="w-4 h-4" />
                <span>{t.chapter7.retakeBtn}</span>
              </button>

              <button
                onClick={() => setIsCheatSheetOpen(true)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold transition-all shadow-lg shadow-purple-500/20"
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
