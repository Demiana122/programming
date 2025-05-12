export interface Topic {
  id: string;
  title: string;
  description: string;
  code: string;
  quiz: {
    question: string;
    options: string[];
    correctAnswer: number;
  }[];
}