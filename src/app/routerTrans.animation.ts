import { trigger, transition, style, animate, group, query } from "@angular/animations";

const ANIM_TIMING = '800ms cubic-bezier(.83,.01,.17,1)';

export const routerTrans = trigger('routerTrans', [
  transition('home => contact', [
    query(':enter, :leave', style({ position: 'absolute', width: '100%', left: '0' }), { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate(ANIM_TIMING, style({ transform: 'translateX(0)', opacity: 1 }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate(ANIM_TIMING, style({ transform: 'translateX(-100%)', opacity: 0 }))
      ], { optional: true })
    ])
  ]),
  transition('contact => home', [
    query(':enter, :leave', style({ position: 'absolute', width: '100%', left: '0' }), { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate(ANIM_TIMING, style({ transform: 'translateX(0)', opacity: 1 }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate(ANIM_TIMING, style({ transform: 'translateX(100%)', opacity: 0 }))
      ], { optional: true })
    ])
  ]),
  transition('* => project', [
    query(':enter, :leave', style({ position: 'absolute', width: '100%', left: '0' }), { optional: true }),
    group([
      query(':leave', [
        style({ transform: 'scale(1)', opacity: 1 }),
        animate('200ms ease-in', style({ transform: 'scale(.8)', opacity: 0 }))
      ], { optional: true }),
      query(':enter', [
        style({ transform: 'translateY(180px)', opacity: 0 }),
        animate('400ms 300ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ], { optional: true })
    ])
  ]),
  transition('project => *', [
    query(':enter, :leave', style({ position: 'absolute', width: '100%', left: '0' }), { optional: true }),
    group([
      query(':leave', [
        style({ opacity: 1 }),
        animate('200ms ease-in', style({ transform: 'translateY(180px)', opacity: 0 }))
      ], { optional: true }),
      query(':enter', [
        style({ transform: 'scale(.8)', opacity: 0 }),
        animate('400ms 300ms ease-out', style({ transform: 'scale(1)', opacity: 1 }))
      ], { optional: true })
    ])
  ])
]);