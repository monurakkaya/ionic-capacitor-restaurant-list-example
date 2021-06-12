import { Component, OnInit } from '@angular/core';
import {RestaurantService} from '../../services/restaurant.service';
import {AppService} from '../../../core/services/app.service';
import {Filter} from '../../models/filter';
import {FeedItem} from '../../models/feed-item';

@Component({
  selector: 'app-around-me',
  templateUrl: './around-me.page.html',
  styleUrls: ['./around-me.page.scss'],
})
export class AroundMePage implements OnInit {
  feedItems: FeedItem[] = [];
  private filter = new Filter();
  constructor(
    private appService: AppService,
    private restaurantService: RestaurantService
  ) { }

  ngOnInit() {
    this.getFeedList();
  }

  paginate(ev) {
    this.filter.skip += this.filter.limit;
    this.getFeedList(ev);
  }

  getFeedList(ev?) {
    this.restaurantService.getClosestRestaurants(this.filter)
      .subscribe((data) => {
        this.feedItems = this.feedItems.concat(data);
        console.log(this.feedItems);
        if (ev) {
          ev.target.complete();
          if (data.length === 0) {
            ev.target.disabled = true;
          }
        }
      });
  }

}
