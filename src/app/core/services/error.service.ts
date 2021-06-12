import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  private errors = new BehaviorSubject('');
  constructor() { }

  clearErrors() {
    this.errors.next('');
  }

  setErrors(data) {
    this.errors.next(
      this.extractErrors(data)
    );
  }

  getErrors() {
    return this.errors.getValue();
  }

  extractErrors(errors) {
    return errors;
  }
}
