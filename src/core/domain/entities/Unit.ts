import { Example } from "./Examples";
import { Activity } from "./Activities";

export interface Subtheme {
  id: string;
  title: string;
  text: string;
  example?: Example;
  activity?: Activity;
  note?: string;
}

export interface Theme {
  id: string;
  title: string;
  subthemes?: Subtheme[]; 
  text: string;
  example?: Example;
  activity?: Activity;
  note?: string;
}

export interface Topic {
  title: string;
  subtopics?: string[];
}

export interface Unit {
  id: string;
  title: string;
  topics: Topic[];
  introduction: string;
  summary?: string[];
  themes?: Theme[];
}
