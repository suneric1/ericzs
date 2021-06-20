import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService, TransformedPost } from '../shared/project.service';
import { trigger, transition, style, animate } from '@angular/animations';
import marked from 'marked';
import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';
import { delayWhen } from 'rxjs/operators';
import { timer } from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  animations: [
    trigger('fade', [
      transition('false => true', [
        style({ opacity: 0 }),
        animate('200ms ease-in-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class ProjectComponent implements OnInit {
  project: TransformedPost;
  prevLink;
  nextLink;
  nextName;
  viewingLang;
  renderedZh;
  renderedEn;
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private router: Router,
    private sanitizer: DomSanitizer,
    public translate: TranslateService
  ) {}

  ngOnInit() {
    const renderer = {
      image(href, title, text) {
        if (title) {
          return `
          <div class="image-wrapper">
            <img src="${href}" alt="${text}">
            <p class="caption">${title}</p>
          </div>
          `;
        } else {
          return `
          <div class="image-wrapper">
            <img src="${href}" alt="${text}">
          </div>
          `;
        }
      },
      link(href, title, text) {
        return `
        <a href="${href}" target="_blank">${text}</a>
        `;
      },
    };
    marked.use({ renderer });
    const renderMd = (md) => this.sanitizer.bypassSecurityTrustHtml(marked(md));
    this.translate.onLangChange.subscribe(
      ({ lang }) => (this.viewingLang = lang)
    );

    this.route.params.subscribe(({ id }) => {
      const p = this.projectService.getProjectById(id);
      this.project = p;
      this.renderedEn = null;
      this.renderedZh = null;

      const next = this.projectService.getNextProject(p);
      this.nextLink = next.link;
      this.nextName = next.title;
      this.prevLink = this.projectService.getNextProject(p, -1).link;

      this.loading = true;
      const startTime = Date.now();
      this.projectService
        .getMarkdownById(p.id)
        .pipe(delayWhen(() => timer(startTime + 500 - Date.now())))
        .subscribe(([en, zh]) => {
          this.loading = false;
          this.renderedEn = renderMd(en);
          this.renderedZh = renderMd(zh);
          this.viewingLang = this.translate.currentLang;
        });
    });
  }

  @HostListener('window:keyup', ['$event.key'])
  detectShortcut(key) {
    switch (key) {
      case 'ArrowRight':
        this.router.navigate(this.nextLink);
        break;
      case 'ArrowLeft':
        this.router.navigate(this.prevLink);
        break;
      case 'Escape':
        this.router.navigate(['/']);
        break;
    }
  }

  viewOriginal() {
    this.viewingLang = this.project.originLang;
  }

  viewTranslated() {
    this.viewingLang = this.project.originLang === 'en' ? 'zh' : 'en';
  }
}
