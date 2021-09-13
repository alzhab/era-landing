import LandingApi from "./api/Landing";
import { httpClient, StaticService } from "./services";
import QuestionsStore from "./stores/questions.store";
import ConsultationStore from "./stores/consultation.store";
import ApplicationStore from "./stores/application.store";

const services = {
  staticService: new StaticService(),
};

const questionsApi = new LandingApi(httpClient);

const api = {
  questionsApi,
};

const stores = {
  questionsStore: new QuestionsStore(api.questionsApi),
  applicationStore: new ApplicationStore(api.questionsApi),
  consultationStore: new ConsultationStore(api.questionsApi),
};

export { stores, services };
