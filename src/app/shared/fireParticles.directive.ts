import {
  Directive,
  ViewContainerRef,
  ComponentFactoryResolver,
  Input
} from "@angular/core";
import { ParticlesRectComponent } from "../particles-rect/particles-rect.component";
import { ParticlesCircleComponent } from "../particles-circle/particles-circle.component";

@Directive({
  selector: "[fireParticles]",
  host: {
    "(click)": "onClick($event)"
  }
})
export class FireParticlesDirective {
  @Input("fireParticles")
  type;
  timeout;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) {}

  onClick(e: MouseEvent) {
    clearTimeout(this.timeout);
    const partFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.type === "rect" ? ParticlesRectComponent : ParticlesCircleComponent
    );
    const comp = this.viewContainerRef.createComponent(partFactory);
    const style: CSSStyleDeclaration = comp.location.nativeElement.style;
    style.position = "fixed";
    style.top = this.type === "rect" ? e.clientY + "px" : e.clientY - 24 + "px";
    style.left = e.clientX - 15 + "px";
    document.body.appendChild(comp.location.nativeElement);

    this.timeout = setTimeout(() => {
      this.viewContainerRef.clear();
    }, 1000);
  }
}
