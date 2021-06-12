import { Component, OnInit } from '@angular/core';
import {RestaurantService} from "../../services/restaurant.service";
import {AppService} from "../../../core/services/app.service";

@Component({
  selector: 'app-around-me',
  templateUrl: './around-me.page.html',
  styleUrls: ['./around-me.page.scss'],
})
export class AroundMePage implements OnInit {

  constructor(
    private appService: AppService,
    private restaurantService: RestaurantService
  ) { }

  ngOnInit() {
    this.restaurantService.getClosestRestaurants({
      limit:10
    }).subscribe((data) => console.log(data), (error) => this.appService.displayErrors());
  }

}
