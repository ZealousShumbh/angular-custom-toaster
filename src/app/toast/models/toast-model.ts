export interface ToastModel {
    title: string;
    message: string;
    position: ToastPositionModel;
    type: ToastTypeModel;
}

export enum ToastPositionModel {
    TOP_LEFT,
    MIDDLE_LEFT,
    BOTTOM_LEFT,
    TOP_CENTER,
    MIDDLE_CENTER,
    BOTTOM_CENTER,
    TOP_RIGHT,
    MIDDLE_RIGHT,
    BOTTOM_RIGHT,
}

export enum ToastTypeModel {
    SUCCESS = 'success',
    INFO = 'info',
    WARNING = 'warning',
    ERROR = 'danger'
}

export class ToastModel {
    constructor(obj?: ToastModel) {
        let objTitle = (obj && obj.title) ? obj.title : '';

        if ((!objTitle || objTitle.length === 0) && obj?.type) {
            switch (obj?.type) {
                case ToastTypeModel.SUCCESS:
                    objTitle = "Success Toast"
                    break;
                case ToastTypeModel.INFO:
                    objTitle = "Info Toast"
                    break;
                case ToastTypeModel.WARNING:
                    objTitle = "Warning Toast"
                    break;
                case ToastTypeModel.ERROR:
                    objTitle = "Error Toast"
                    break;
                default:
                    objTitle = "Sample Toast"
            }
        }

        return {
            title: objTitle,
            message: obj ? obj.message : '',
            position: obj ? obj.position : ToastPositionModel.TOP_RIGHT,
            type: obj ? obj.type : ToastTypeModel.INFO
        }
    }
}
