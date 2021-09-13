import BaseAPI from "../BaseAPI";
import {
  IFieldType,
  IQuestion,
  IQuestionnaire,
  IQuestionnaireType,
} from "@models/question";

export default class LandingApi extends BaseAPI {
  questionsUrl = "/questions";
  consultationUrl = "/order/consultation";
  applicationUrl = "/order/email";
  orderAnswersUrl = "/order";

  async getQuestions(type: IQuestionnaireType): Promise<IQuestion[]> {
    try {
      const response = await this.get(`${this.questionsUrl}/${type}`);
      return response?.data;
    } catch (e) {
      return [];
    }
  }

  async setConsultation(phone: string): Promise<IQuestion[]> {
    try {
      const response = await this.post(this.consultationUrl, {
        phone_number: phone,
      });
      return response?.data;
    } catch (e) {
      return [];
    }
  }

  async orderAnswers(body: IQuestionnaire): Promise<string> {
    try {
      const response = await this.post(this.orderAnswersUrl, body);
      return response?.data;
    } catch (e) {
      return "";
    }
  }

  async setApplication(body: {
    email: string;
    name: string;
    phone_number: string;
  }): Promise<IQuestion[]> {
    try {
      const response = await this.post(this.applicationUrl, body);
      return response?.data;
    } catch (e) {
      return [];
    }
  }
}
