import { Activity } from "./Activities"

export interface Exam {
  id: string
  title: string
  description: string
  sections: Sections[]
}

export interface Sections {
  id: string
  title: string
  activities: Activity[]
}