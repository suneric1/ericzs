import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService, TransformedPost } from '../shared/project.service';
import { trigger, transition, style, animate } from '@angular/animations';
import marked from 'marked';
import { TranslateService } from '@ngx-translate/core';
import { switchMap } from 'rxjs/operators';
import { concat, of } from 'rxjs';

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
  loaded = true;
  mdRendered;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private router: Router,
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

    this.route.params.subscribe(({ id }) => {
      const p = this.projectService.getProjectById(id);
      this.project = p;

      if (p.mdContent) {
        this.mdRendered = concat(
          of(marked(p.mdContent[this.translate.currentLang])),
          this.translate.onLangChange.pipe(
            switchMap(({ lang }) => {
              return of(marked(p.mdContent[lang]));
            })
          )
        );
        this.translate.use(this.translate.currentLang);
      } else if (p.body?.find(({ type }) => type === 'youtube')) {
        this.loaded = false;
        setTimeout(() => {
          this.loaded = true;
        }, 5000);
      }

      const next = this.projectService.getNextProject(p);
      this.nextLink = next.link;
      this.nextName = next.title;
      this.prevLink = this.projectService.getNextProject(p, -1).link;
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

  load(src) {
    if (src) {
      this.loaded = true;
    }
  }

  viewOriginal() {
    const lang = this.project.originLang;
    this.translate.use(lang);
  }
}
