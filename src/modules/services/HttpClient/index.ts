import axios, { AxiosInstance } from "axios";
import { api } from "@assets/const";

export const httpClient: AxiosInstance = axios.create({
  baseURL: api,
});
