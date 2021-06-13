import {GeoLocation} from '../../core/models/geo-location';
import {WorkingHour} from './working-hour';

export class StoreInfo {
  id: string;
  userPoint: number;
  status: string;
  rate: number;
  rateFormatted: string;
  minOrderPrice: number;

  geoLocation: GeoLocation;
  workingHours: WorkingHour[] = [];
  workingHoursForToday: WorkingHour;

  prepare(input: any) {
    Object.assign(this, input);

    if (input.geoLocation) {
      this.geoLocation = new GeoLocation().prepare(input.geoLocation);
    }

    if (input.workingHours) {
      this.workingHours = input.workingHours.map(workingHour => new WorkingHour().prepare(workingHour));
      this.workingHoursForToday = this.workingHours[0];
    }

    this.rateFormatted = this.rate.toFixed(1);
    return this;
  }
}
