export type ChapterId = 
  | 'why-state'
  | 'anatomy'
  | 'snapshot-queue'
  | 'fiber-hooks'
  | 'complex-state'
  | 'interactive-labs'
  | 'quiz';

export interface Chapter {
  id: ChapterId;
  number: number;
  title: string;
  subtitle: string;
  badge: string;
  color: string;
  readTime: string;
}

export interface QuizQuestion {
  id: number;
  title: string;
  scenario: string;
  codeSnippet: string;
  options: {
    id: string;
    text: string;
    explanation: string;
  }[];
  correctOptionId: string;
  keyTakeaway: string;
}

export interface CheatSheetItem {
  category: string;
  rule: string;
  doCode: string;
  dontCode: string;
  explanation: string;
}
