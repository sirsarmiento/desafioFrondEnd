import { NgModule } from '@angular/core';
import { ButtonEventDirective } from '../directives/button-even.directive';
import { ClickOutsideDirective } from '../directives/click-outside.directive';

@NgModule({
  declarations: [ButtonEventDirective, ClickOutsideDirective],
  imports: [],
  exports: [
    ButtonEventDirective,
    ClickOutsideDirective
  ]
})
export class SharedModule { }
