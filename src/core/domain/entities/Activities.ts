export type ActivityInput = {
  type: 'input'
  title: string
  instructions: string
  content: string;
}

export type ActivityMultipleChoice = {
  type: 'multiple-choice'
  title: string
  instructions: string
  content: {
    question: string
    options: string[]
    correctAnswer?: string
  }[]
}

export type ActivityMultipleSelect = {
  type: 'multiple-select'
  title: string
  instructions: string
  content: {
    question: string
    options: string[]
    correctAnswers: string[]
  }[]
}

export type ActivityDragAnDrop = {
  type: 'drag-and-drop'
  title: string
  instructions: string
  content: {
    categories: string[]
    items: {
      text: string
      category: string
    }[]
  }
}

export type ActivityFillInTheBlanks = {
  type: 'fill-in-the-blanks'
  title: string
  instructions: string
  content: {
    sentence: string
    answer: string
  }[]
}

export type ActivityClassifyText = {
  type: 'classify-text'
  title: string
  instructions: string
  options: string[]
  content: {
    text: string
    correctAnswer: string;
  }[]
}

export type ActivityOrderText = {
  type: 'order-text'
  title: string
  instructions: string
  content: {
    id: string
    text: string
  }[],
  correctOrder: string[]
}

export type ActivityReWrite = {
  type: 're-write'
  title: string
  instructions: string
  content: {
    original: string
    correct: string
  }[]
}


export type Activity = ActivityInput | ActivityMultipleChoice | ActivityDragAnDrop | ActivityMultipleSelect | ActivityFillInTheBlanks | ActivityClassifyText | ActivityOrderText | ActivityReWrite