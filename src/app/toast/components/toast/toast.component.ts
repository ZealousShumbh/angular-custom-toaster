import { ToastModel, ToastTypeModel, ToastPositionModel } from './../../models/toast-model';
import { ToastService } from './../../services/toast.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {
  currentTopLeftToasts: ToastModel[] = [];
  currentMiddleLeftToasts: ToastModel[] = [];
  currentBottomLeftToasts: ToastModel[] = [];
  currentTopCenterToasts: ToastModel[] = [];
  currentMiddleCenterToasts: ToastModel[] = [];
  currentBottomCenterToasts: ToastModel[] = [];
  currentTopRightToasts: ToastModel[] = [];
  currentMiddleRightToasts: ToastModel[] = [];
  currentBottomRightToasts: ToastModel[] = [];

  constructor(private toastService: ToastService) { }

  ngOnInit(): void {
    this.subscribeToToasts();
  }

  subscribeToToasts() {
    console.log('subscribeToToasts');
    this.toastService.toastModels.subscribe((toasts: ToastModel) => {
      switch (toasts.position) {
        case ToastPositionModel.TOP_LEFT:
          this.currentTopLeftToasts.push(toasts);
          break;
        case ToastPositionModel.TOP_CENTER:
          this.currentTopCenterToasts.push(toasts);
          break;
        case ToastPositionModel.MIDDLE_LEFT:
          this.currentMiddleLeftToasts.push(toasts);
          break;
        case ToastPositionModel.MIDDLE_CENTER:
          this.currentMiddleCenterToasts.push(toasts);
          break;
        case ToastPositionModel.MIDDLE_RIGHT:
          this.currentMiddleRightToasts.push(toasts);
          break;
        case ToastPositionModel.BOTTOM_LEFT:
          this.currentBottomLeftToasts.push(toasts);
          break;
        case ToastPositionModel.BOTTOM_CENTER:
          this.currentBottomCenterToasts.push(toasts);
          break;
        case ToastPositionModel.BOTTOM_RIGHT:
          this.currentBottomRightToasts.push(toasts);
          break;
        default:
          this.currentTopRightToasts.push(toasts);
          break;
      }

    });
  }

  removeToast(position: ToastPositionModel, index: number) {
    console.log(`Inside ToastComponent, Removing toast from position ${position} with index ${index}`);

    switch (position) {
      case ToastPositionModel.TOP_LEFT:
        this.currentTopLeftToasts.splice(index, 1);
        break;
      case ToastPositionModel.TOP_CENTER:
        this.currentTopCenterToasts.splice(index, 1);
        break;
      case ToastPositionModel.MIDDLE_LEFT:
        this.currentMiddleLeftToasts.splice(index, 1);
        break;
      case ToastPositionModel.MIDDLE_CENTER:
        this.currentMiddleCenterToasts.splice(index, 1);
        break;
      case ToastPositionModel.MIDDLE_RIGHT:
        this.currentMiddleRightToasts.splice(index, 1);
        break;
      case ToastPositionModel.BOTTOM_LEFT:
        this.currentBottomLeftToasts.splice(index, 1);
        break;
      case ToastPositionModel.BOTTOM_CENTER:
        this.currentBottomCenterToasts.splice(index, 1);
        break;
      case ToastPositionModel.BOTTOM_RIGHT:
        this.currentBottomRightToasts.splice(index, 1);
        break;
      default:
        this.currentTopRightToasts.splice(index, 1);
        break;
    }
  }

  getToastColorClass(type: ToastTypeModel): string {
    switch (type) {
      case ToastTypeModel.SUCCESS:
        return 'text-white bg-success';
      case ToastTypeModel.WARNING:
        return 'text-black bg-warning';
      case ToastTypeModel.ERROR:
        return 'text-white bg-danger';
      default:
        return 'text-black bg-info';
    }
  }

  getToastPositionClass(position: ToastPositionModel): string {
    let classToReturn = '';

    switch (position) {
      case ToastPositionModel.TOP_LEFT:
        classToReturn = 'top-0 start-0';
        break;
      case ToastPositionModel.TOP_CENTER:
        classToReturn = 'top-0 start-50 translate-middle-x';
        break;
      case ToastPositionModel.MIDDLE_LEFT:
        classToReturn = 'top-50 start-0 translate-middle-y';
        break;
      case ToastPositionModel.MIDDLE_CENTER:
        classToReturn = 'top-50 start-50 translate-middle';
        break;
      case ToastPositionModel.MIDDLE_RIGHT:
        classToReturn = 'top-50 end-0 translate-middle-y';
        break;
      case ToastPositionModel.BOTTOM_LEFT:
        classToReturn = 'bottom-0 start-0';
        break;
      case ToastPositionModel.BOTTOM_CENTER:
        classToReturn = 'bottom-0 start-50 translate-middle-x';
        break;
      case ToastPositionModel.BOTTOM_RIGHT:
        classToReturn = 'bottom-0 end-0';
        break;
      default:
        classToReturn = 'top-0 end-0';
        break;
    }

    return classToReturn;
  }

}
