export enum IFieldType {
  radio = "radio",
  checkbox = "checkbox",
  text = "text",
}

export interface IField {
  name: string;
  type: IFieldType;
  placeholder: string;
}

export interface IQuestion {
  id: string;
  name: string;
  order: number;
  fields: IField[] | null;
}

export enum IQuestionnaireType {
  web = "web",
  mobile = "mobile",
  online = "online",
  corporate = "corporate",
}

export enum IQuestionnaireTitle {
  web = "Web",
  mobile = "Mobile",
}

export interface IQuestionnaireAnswer {
  // IQuestion [name]
  question_name: string;
  // IField [name] []
  answers: string[];
}

export interface IQuestionnaire {
  questionnaire_name: IQuestionnaireType;
  questionnaire_answers: IQuestionnaireAnswer[];
}
