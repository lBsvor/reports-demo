import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ControlsSharedModule } from "src/app/modules/controls-shared-module/controls-shared.module";
import { Table1Component } from "src/app/pages/tables/table1.component";
import { Table2Component } from "src/app/pages/tables/table2.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ControlsSharedModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TablesComponent,
    Table1Component,
    Table2Component,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent,
    MapComponent,
    
    // RtlComponent
  ]
})
export class AdminLayoutModule {}
