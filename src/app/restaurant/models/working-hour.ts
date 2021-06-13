export class WorkingHour {
  day: number;
  open: string;
  close: string;
  closed: boolean;
  text: string;

  prepare(input: any) {
    Object.assign(this, input);
    this.text = `${this.open} / ${this.close}`;
    return this;
  }
}
