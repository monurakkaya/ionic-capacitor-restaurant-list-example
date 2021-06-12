import { Injectable } from '@angular/core';
import {ErrorService} from './error.service';
import {ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(
    private errorService: ErrorService,
    private toastController: ToastController
  ) { }

  async displayErrors() {
    const message = this.errorService.getErrors();
    const toast = await this.toastController.create({
      message,
      position: 'middle',
      color: 'danger',
      duration: 4000,
      buttons: [
        {
          side: 'start',
          icon: 'alert-circle-outline',
          text: ''
        },
        {
          side: 'end',
          icon: 'close',
          text: '',
          role: 'cancel'
        }
      ]
    });
    await toast.present();
  }
}
