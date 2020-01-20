import { Directive, Renderer2 } from '@angular/core';

@Directive({
    selector : '[selectText]'
    })
    export class selectTextDirective {
    constructor(public renderer2: Renderer2) {}

    ngOnInit() {
        console.log('in directive');
        let input = this.renderer2.selectRootElement('#edit-input') as HTMLInputElement
        input.focus();
        setTimeout(_ => {
        input.select()
        }, 0)
    }
}