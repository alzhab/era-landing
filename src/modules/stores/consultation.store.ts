import BaseStore from "./base";
import { makeObservable } from "mobx";
import LandingApi from "../api/Landing";

export default class ConsultationStore extends BaseStore {
  constructor(private questionsApi: LandingApi) {
    super();
    makeObservable(this, {});
  }

  sendConsultation(phone: string) {
    this.makeRequest({
      request: () => this.questionsApi.setConsultation(phone),
    });
  }
}
