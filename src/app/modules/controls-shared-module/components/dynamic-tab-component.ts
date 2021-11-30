import { AfterViewInit, Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef } from "@angular/core";
import { Observable } from "rxjs";
import { Tab } from "src/app/pages/dashboard/dashboard.component";

@Component({
    selector: "dynamic-tab-component",
    templateUrl: "./dynamic-tab-component.html"
  })
  export class DynamicTabComponent implements AfterViewInit {
    public components =[];
    @Input() tabs$ : Observable<Tab[]> = new Observable<Tab[]>();
   // @Input() components : Observable<Tab[]> = new Observable<Tab[]>();
    @ViewChild('content', {read: ViewContainerRef, static: false}) public viewContainer: ViewContainerRef;
   // public @Input()<any> components = new prop[];
    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    }

    public ngAfterViewInit(): void {
        this.tabs$.subscribe((x)=>{
            this.components = x.map(x=>x.type);
            console.log("a");
            console.log(this.components);
        this.renderComponent(0);
        })
    }

    public tabChange(index: number) {
        setTimeout(() => {
            this.renderComponent(index);
        });
    }

    private renderComponent(index: number) {
        if((this.components[index])){
            console.log("b");
        const factory = this.componentFactoryResolver.resolveComponentFactory((this.components[index]));
        console.log("c");
        this.viewContainer.createComponent(factory);
        console.log(this.components[0])
    }
}
}