export class Location {
  type: string;
  coordinates: [number];

  prepare(input: any) {
    Object.assign(this, input);
    return this;
  }
}
