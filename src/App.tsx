import React from 'react';
import { ProgressProvider, useProgress } from './context/ProgressContext';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { FloatingNextButton } from './components/common/FloatingNextButton';
import { LandingPage } from './components/landing/LandingPage';
import { Chapter1WhyState } from './components/chapters/Chapter1WhyState';
import { Chapter2Anatomy } from './components/chapters/Chapter2Anatomy';
import { Chapter3SnapshotQueue } from './components/chapters/Chapter3SnapshotQueue';
import { Chapter4FiberLinkedList } from './components/chapters/Chapter4FiberLinkedList';
import { Chapter5ComplexState } from './components/chapters/Chapter5ComplexState';
import { Chapter6Sandboxes } from './components/chapters/Chapter6Sandboxes';
import { Chapter7Quiz } from './components/chapters/Chapter7Quiz';

const MainContent: React.FC = () => {
  const { currentChapter } = useProgress();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {currentChapter === 'why-state' && <Chapter1WhyState />}
      {currentChapter === 'anatomy' && <Chapter2Anatomy />}
      {currentChapter === 'snapshot-queue' && <Chapter3SnapshotQueue />}
      {currentChapter === 'fiber-hooks' && <Chapter4FiberLinkedList />}
      {currentChapter === 'complex-state' && <Chapter5ComplexState />}
      {currentChapter === 'interactive-labs' && <Chapter6Sandboxes />}
      {currentChapter === 'quiz' && <Chapter7Quiz />}
    </main>
  );
};

// The existing chapter-based experience — what used to be the entire app,
// now one of the two top-level views (the other being the roadmap/landing
// page in LandingPage.tsx).
const CoursePage: React.FC = () => (
  <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950">
    <Header />
    <div className="flex-1">
      <MainContent />
    </div>
    <Footer />
    <FloatingNextButton />
  </div>
);

const AppShell: React.FC = () => {
  const { view } = useProgress();
  return view === 'landing' ? <LandingPage /> : <CoursePage />;
};

function App() {
  return (
    <LanguageProvider>
      <ProgressProvider>
        <AppShell />
      </ProgressProvider>
    </LanguageProvider>
  );
}

export default App;
