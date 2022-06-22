import { ToastPositionModel, ToastTypeModel } from './../models/toast-model';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ToastModel } from '../models/toast-model';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toastModels: Observable<ToastModel>;
  private currentToastModel = new Subject<ToastModel>();

  constructor() {
    this.toastModels = this.currentToastModel.asObservable();
  }

  showToast(message: string, title?: string, position?: ToastPositionModel, type?: ToastTypeModel) {
    const currentToastModel: ToastModel = new ToastModel({
      title: title ? title : '',
      message,
      position: (position || position === 0) ? position : ToastPositionModel.TOP_RIGHT,
      type: type ? type : ToastTypeModel.INFO
    });

    this.currentToastModel.next(currentToastModel);
  }
}
