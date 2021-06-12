export class WorkingHour {
  day: number;
  open: string;
  close: string;
  closed: boolean;

  prepare(input: any) {
    Object.assign(this, input);
    return this;
  }
}
