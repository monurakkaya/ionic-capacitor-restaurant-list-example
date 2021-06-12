export class Filter {
  skip: number;
  limit: number;
  latitude: number;
  longitude: number;

  constructor(skip = 0, limit = 10, latitude = 0, longitude = 0) {
    Object.assign(this, {skip, limit, latitude, longitude});
  }
}
