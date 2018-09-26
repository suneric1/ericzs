import { Component, OnInit, OnDestroy } from '@angular/core';
import { projects } from '../shared/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects = projects;
  styleData: any = {
    targetOffsetY: 0,
    offsetY: 0,
    targetScale: 1,
    scale: 1,
    targetOpacity: 1,
    opacity: 1,
    targetBlur: 0,
    blur: 0
  };
  msgStyle: any = {};
  willAnimate: boolean;

  constructor() {}

  ngOnInit() {
    this.willAnimate = true;
    requestAnimationFrame(this.update.bind(this));
  }

  ngOnDestroy() {
    this.willAnimate = false;
  }

  update() {
    const d = this.styleData;
    const y = window.scrollY;
    if (y < 5) {
      d.targetOffsetY = 0;
      d.targetScale = 1;
      d.targetOpacity = 1;
      d.targetBlur = 0;
    } else if (y < 100) {
      d.targetOffsetY = - y / 2;
      d.targetScale = 1;
      d.targetOpacity = 1;
      d.targetBlur = 0;
    } else if (y < 400) {
      d.targetOffsetY = - y / 2;
      d.targetScale = 1 - (y - 100) / 800;
      d.targetOpacity = 1 - (y - 100) / 200;
      d.targetBlur = (y - 100) / 40;
    } else {
      d.targetOpacity = 0;
    }

    d.offsetY = (0.1 * d.targetOffsetY + d.offsetY * 0.9).toFixed(3);
    d.scale = (0.1 * d.targetScale + d.scale * 0.9).toFixed(3);
    d.opacity = (0.1 * d.targetOpacity + d.opacity * 0.9).toFixed(3);
    d.blur = (0.1 * d.targetBlur + d.blur * 0.9).toFixed(3);

    Object.assign(this.msgStyle, {
      transform: `translateY(${d.offsetY}px) scale(${d.scale})`,
      opacity: d.opacity,
      filter: `blur(${d.blur}px)`
    });

    if (this.willAnimate) { requestAnimationFrame(this.update.bind(this)); }
  }
}
