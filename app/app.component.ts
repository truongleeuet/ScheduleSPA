import { Component, OnInit, ViewContainerRef } from "@angular/core";

import "./rxjs-operators";

@Component({
    selector: "scheduler",
    templateUrl: "app/app.component.html"
})

export class AppComponent {
    constructor(private viewContainerRef: ViewContainerRef) {
      this.viewContainerRef = viewContainerRef;
    }
}