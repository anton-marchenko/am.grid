import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[amGridCellTemplate]'
})
export class GridCellTemplateDirective {

  constructor(public readonly templateRef: TemplateRef<unknown>) { }

}
