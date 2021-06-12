export class GeoLocation {
  approve: boolean;
  latitude: number;
  longitude: number;

  prepare(input: any) {
    Object.assign(this, input);
    return this;
  }

}
