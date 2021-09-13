import { action, makeObservable, observable } from "mobx";

interface MakeRequestData<D> {
  request: () => Promise<D>;
  success?: (data: D) => void;
  error?: (error: string) => void;
  onFinally?: () => void;
  loadingOff?: true;
}

export default class BaseStore {
  loading: boolean = false;
  error: string = "";
  success: boolean = false;

  constructor() {
    makeObservable(this, {
      loading: observable,
      error: observable,
      success: observable,
      clear: action,
    });
  }

  clear() {
    this.success = false;
    this.loading = false;
    this.error = "";
  }

  makeRequest = async <D>({
    request,
    success,
    error,
    onFinally,
    loadingOff,
  }: MakeRequestData<D>) => {
    if (!loadingOff) {
      this.loading = true;
    }
    this.error = "";

    const res = await request();
    const errorMesssage = "";

    if (!errorMesssage && res) {
      this.success = true;
      if (success) {
        success(res);
      }
    } else {
      this.error = errorMesssage;
      if (error) {
        error(errorMesssage);
      }
    }

    if (!loadingOff) {
      this.loading = false;
    }

    if (onFinally) {
      onFinally();
    }
  };
}
