export interface Exam {
  id: string
  title: string
  description: string
  sections: Sections[]
}

export interface Sections {
  id: string
  title: string
  problems: ExamProblems[]
}

export type MultipleChoice = {
  type: 'multiple-choice'
  question: string
  options: string[]
  correctAnswer?: string
}

export type DragAnDrop = {
  type: 'drag-and-drop'
  instructions: string
  categories: string[]
  items: {
    text: string
    category: string
  }[]
}

export type ClassifyText = {
  type: 'classify-text'
  instructions: string
  options: string[]
  text: string
  correctAnswer: string;
}


export type MultipleSelect = {
  type: 'multiple-select'
  question: string
  options: string[]
  correctAnswers: string[]
}

export type ExamProblems = MultipleChoice | DragAnDrop | ClassifyText | MultipleSelect