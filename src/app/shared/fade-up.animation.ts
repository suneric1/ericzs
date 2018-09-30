import { animation, style, animate } from "@angular/animations";

export const fadeUp = animation([
  style({ opacity: 0, transform: 'translateY(100px)' }),
  animate('600ms ease-in-out', style({ opacity: 1, transform: 'translateY(0)' }))
]);