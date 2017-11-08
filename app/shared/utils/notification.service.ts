import { Injectable } from "@angular/core";
import { Predicate } from "../interfaces";

declare var alertify: any;

@Injectable()
export class NotificationService {
    private _notifier: any = alertify;
    constructor() { }
    openConfirmationDialog(message: string, okCallback: () => any) {
        this._notifier.confirm(message, function(e) {
            if (e) {
                okCallback();
            } else {
            }
        });
    }
    printSuccessMessage(message: string) {
        this._notifier.success(message);
    }

    printErrorMessage(message: string) {
        this._notifier.error(message);
    }
}