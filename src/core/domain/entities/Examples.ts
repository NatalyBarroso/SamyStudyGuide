export type ExampleText = {
  type: 'text'
  textStart: string
  content: string
  textEnd: string
}

export type ExampleList = {
  type: 'list'
  textStart: string
  content: string[]
  textEnd: string
}

export type ExampleTable = {
  type: 'table'
  textStart: string
  content: string[][]
  textEnd: string
}

export type Example = ExampleText | ExampleList | ExampleTable