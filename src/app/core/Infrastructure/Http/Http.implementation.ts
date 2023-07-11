import axios, {AxiosRequestHeaders} from 'axios';
import {IHttp} from '@core/Infrastructure/Contracts/Http.interface';
import AsyncStorageImplementation from '../Storage/async/AsyncStorage.implementation';

export type Method = 'get' | 'delete' | 'post' | 'put' | 'patch';

export default class HttpImplementation implements IHttp {
  private readonly storage = new AsyncStorageImplementation();
  private headers: any = {};
  private readonly REQUEST_TIMEOUT: number = 30000;
  private token?: string = undefined;

  constructor() {}

  public async get(
    url: string,
    body?: any,
    _responseType: string = 'json',
  ): Promise<any> {
    try {
      await this.buildHeaders();

      const response = await axios.get(url, {
        headers: this.getHeaders(),
        timeout: this.REQUEST_TIMEOUT,
      });
      return Promise.resolve(response.data ?? response);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public async post(
    url: string,
    body?: any,
    responseType: string = 'json',
  ): Promise<any> {
    try {
      await this.buildHeaders();

      const response = await axios.post(url, body, {
        headers: this.getHeaders(),
        timeout: this.REQUEST_TIMEOUT,
        responseType: responseType as 'json',
      });

      return Promise.resolve(response.data ?? response);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public async patch(
    url: string,
    body?: any,
    responseType: string = 'json',
  ): Promise<any> {
    try {
      await this.buildHeaders();

      const response = await axios.patch(url, body, {
        headers: this.getHeaders(),
        timeout: this.REQUEST_TIMEOUT,
        responseType: responseType as 'json',
      });
      return Promise.resolve(response.data ?? response);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public async put(
    url: string,
    body?: any,
    responseType: string = 'json',
  ): Promise<any> {
    try {
      await this.buildHeaders();

      const response = await axios.put(url, body, {
        headers: this.getHeaders(),
        timeout: this.REQUEST_TIMEOUT,
        responseType: responseType as 'json',
      });
      return Promise.resolve(response.data ?? response);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public async delete(
    url: string,
    body?: any,
    responseType: string = 'json',
  ): Promise<any> {
    try {
      await this.buildHeaders();

      const response = await axios.delete(url, {
        headers: this.getHeaders(),
        timeout: this.REQUEST_TIMEOUT,
        responseType: responseType as 'json',
      });
      return Promise.resolve(response.data ?? response);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public setHeaders(headerKey: string, headerValue: string): void {
    this.headers[headerKey] = headerValue;
  }

  private getHeaders(): AxiosRequestHeaders {
    const headers: AxiosRequestHeaders = this.headers;
    this.headers = {};
    return headers;
  }

  private async buildHeaders(): Promise<void> {
    try {
      this.token = undefined;
      if (!this.token) {
        this.token = await this.storage.get('StorageEnum.TOKEN');
      }
      if (this.token) {
        this.setHeaders('Authorization', 'Bearer ' + this.token!);
      }
    } catch {
      return Promise.resolve();
    }
  }
}
