import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { Observer } from "rxjs/internal/types";
import { Table1Component } from "../tables/table1.component";
import { Table2Component } from "../tables/table2.component";

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html"
})
export class DashboardComponent implements OnInit {
  tabs$: Observable<Tab[]>;

  constructor() {
    this.tabs$ = new Observable((observer: Observer<Tab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'Table List 1', type: Table1Component},
          {label: 'Table List 2', type: Table2Component},
          {label: 'Table List 3', type: Table1Component},
          {label: 'Table List 4', type: Table2Component},
        ]);
      }, 1000);
    });
  }
  ngOnInit() {
    
  }
}

export interface Tab {
  label: string;
  type: any;
}



