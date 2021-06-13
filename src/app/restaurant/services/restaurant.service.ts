import { Injectable } from '@angular/core';
import {ApiService} from '../../core/services/api.service';
import {map} from "rxjs/operators";
import {FeedItem} from "../models/feed-item";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  constructor(
    private apiService: ApiService
  ) { }

  getClosestRestaurants(params) {
    return this.apiService.post('/mock/getFeed', params)
      .pipe(
        map((response: any) => response.map(feedItem => new FeedItem().prepare(feedItem)))
      )
  }
}
