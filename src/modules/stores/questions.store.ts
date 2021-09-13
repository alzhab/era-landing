import BaseStore from "./base";
import { action, computed, makeObservable, observable } from "mobx";
import {
  IQuestion,
  IQuestionnaireAnswer,
  IQuestionnaireType,
} from "@models/question";
import LandingApi from "../api/Landing";

export default class QuestionsStore extends BaseStore {
  modalOpen = false;
  type: IQuestionnaireType = IQuestionnaireType.web;
  list: IQuestion[] = [];
  activeQuestion = 1;
  answers: { [key: string]: string[] } = {};

  constructor(private questionsApi: LandingApi) {
    super();
    makeObservable(this, {
      list: observable,
      type: observable,
      modalOpen: observable,
      activeQuestion: observable,

      setModalOpen: action,
      getList: action,
      setActiveQuestion: action,
      setType: action,
      setAnswer: action,
      submitData: action,

      activeQuestionData: computed,
      isSubmitButtonDisabled: computed,
    });
  }

  get activeQuestionData(): IQuestion {
    return this.list[this.activeQuestion - 2];
  }

  getList() {
    this.makeRequest({
      request: () => this.questionsApi.getQuestions(this.type),
      success: (data) => {
        this.list = data;
        this.activeQuestion = 2;
        const newAnswers = {};

        data.forEach((item) => {
          newAnswers[item.name] = [];
        });

        console.log(newAnswers);
        this.answers = newAnswers;
      },
    });
  }

  submitData() {
    if (this.isSubmitButtonDisabled) {
      return false;
    }

    const answers: IQuestionnaireAnswer[] = [];

    for (const answersKey in this.answers) {
      if (this.answers.hasOwnProperty(answersKey)) {
        answers.push({
          question_name: answersKey,
          question_answers: this.answers[answersKey],
        });
      }
    }

    this.makeRequest({
      request: () =>
        this.questionsApi.orderAnswers({
          questionnaire_name: this.type,
          questionnaire_answers: answers,
        }),
      success: (data) => {
        this.clear();
      },
    });
  }

  setModalOpen(val: boolean) {
    this.modalOpen = val;
  }

  setAnswer(values: string[] | string) {
    const name = this.activeQuestionData.name;
    this.answers[name] = typeof values === "string" ? [values] : values;
  }

  setActiveQuestion(val: number) {
    if (!this.isSubmitButtonDisabled) {
      this.activeQuestion = val;
    }
  }

  setType(val: IQuestionnaireType) {
    this.type = val;
  }

  get isSubmitButtonDisabled() {
    return Object.keys(this.answers).length && this.activeQuestion !== 1
      ? !this.answers[this.activeQuestionData.name].length
      : false;
  }

  clear() {
    super.clear();
    this.list = [];
  }
}
