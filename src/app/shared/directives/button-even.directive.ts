import {Directive, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appButtonEvent]'
})
export class ButtonEventDirective {
    @Input() appButtonEvent: number;

    constructor() {}

    @HostListener('click')
    public onClick() {
        console.log(this.appButtonEvent);
    }
}
