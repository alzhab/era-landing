import BaseStore from "./base";
import { makeObservable } from "mobx";
import LandingApi from "../api/Landing";

export default class ApplicationStore extends BaseStore {
  constructor(private questionsApi: LandingApi) {
    super();
    makeObservable(this, {});
  }

  sendApplication(body: { email: string; name: string; phone_number: string }) {
    this.makeRequest({
      request: () => this.questionsApi.setApplication(body),
    });
  }
}
