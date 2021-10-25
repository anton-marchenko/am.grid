import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[amGridHeaderTemplate]'
})
export class GridHeaderTemplateDirective {

  constructor(public readonly templateRef: TemplateRef<unknown>) { }

}
