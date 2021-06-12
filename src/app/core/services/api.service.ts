import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    @Inject('endpoint') public endpoint,
    private client: HttpClient
  ) { }

  post(url, params = {}) {
    return this.client.post(`${this.endpoint}${url}`, params);
  }
}
