import { ToastTypeModel, ToastPositionModel, ToastModel } from './../../models/toast-model';
import { ToastService } from './../../services/toast.service';
import { Component, OnInit } from '@angular/core';
import { toastsData } from '../../data/toastsData';
import { GlobalFunctions } from '../../utils/global-functions';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  toastsData: any[] = toastsData;

  toastTitle: string = "";
  toastMessage: string = "";

  toastPosition: ToastPositionModel = ToastPositionModel.TOP_RIGHT;
  allowedToastPositions: any[] = [
    { display: 'Top Left', value: ToastPositionModel.TOP_LEFT },
    { display: 'Middle Left', value: ToastPositionModel.MIDDLE_LEFT },
    { display: 'Bottom Left', value: ToastPositionModel.BOTTOM_LEFT },
    { display: 'Top Center', value: ToastPositionModel.TOP_CENTER },
    { display: 'Middle Center', value: ToastPositionModel.MIDDLE_CENTER },
    { display: 'Bottom Center', value: ToastPositionModel.BOTTOM_CENTER },
    { display: 'Top Right', value: ToastPositionModel.TOP_RIGHT },
    { display: 'Middle Right', value: ToastPositionModel.MIDDLE_RIGHT },
    { display: 'Bottom Right', value: ToastPositionModel.BOTTOM_RIGHT }
  ];

  constructor(private toastService: ToastService) { }

  ngOnInit(): void {
  }

  getRandomDataForToasts() {
    let title = toastsData[Math.floor(Math.random() * toastsData.length)].title;
    let message = toastsData[Math.floor(Math.random() * toastsData.length)].message;

    return { title, message };
  }

  showToast(type: ToastTypeModel) {
    let title = !GlobalFunctions.isValidInput(this.toastTitle)
      ? (this.getRandomDataForToasts().title && GlobalFunctions.getRandomNumber(0, 100) > 55)
        ? GlobalFunctions.toTitleCase(type) + ' Toast'
        : this.getRandomDataForToasts().title
      : this.toastTitle;

    let message = !GlobalFunctions.isValidInput(this.toastMessage) ? this.getRandomDataForToasts().message : this.toastMessage;

    this.toastService.showToast(
      !GlobalFunctions.isValidInput(this.toastMessage) ? message : this.toastMessage,
      !GlobalFunctions.isValidInput(this.toastTitle) ? title : this.toastTitle,
      this.toastPosition,
      type
    );
  }

  showSuccessToast() {
    this.showToast(ToastTypeModel.SUCCESS);
  }

  showWarningToast() {
    this.showToast(ToastTypeModel.WARNING);
  }

  showErrorToast() {
    this.showToast(ToastTypeModel.ERROR);
  }

  showInfoToast() {
    this.showToast(ToastTypeModel.INFO);
  }
}
