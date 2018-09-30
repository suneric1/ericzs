import { animation, style, animate } from "@angular/animations";

export const fadeDown = animation([
  style({ opacity: 0, transform: 'translateY(-100px)' }),
  animate('800ms ease-in-out', style({ opacity: 1, transform: 'translateY(0)' }))
]);