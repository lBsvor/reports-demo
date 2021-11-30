import { NgModule } from "@angular/core";
import { MatTabsModule } from '@angular/material/tabs';
import { DynamicTabComponent } from "./components/dynamic-tab-component";

@NgModule({
  imports: [
    MatTabsModule
  ],
  exports:[ MatTabsModule,
    ],
    
    declarations: [
        DynamicTabComponent
    ],
 
  providers: [],
  bootstrap: []
})
export class ControlsSharedModule {}
