import { Injectable } from '@angular/core';
import {ApiService} from '../../core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  constructor(
    private apiService: ApiService
  ) { }

  getClosestRestaurants(params) {
    return this.apiService.post('/mock/getFeed', params);
  }
}
