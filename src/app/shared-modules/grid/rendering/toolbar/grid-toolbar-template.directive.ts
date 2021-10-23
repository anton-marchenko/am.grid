import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[amGridToolbarTemplate]',
})
export class GridToolbarTemplateDirective {
  // position = 'top';

  // OR TemplateRef<NgTemplateOutlet>
  constructor(public readonly templateRef: TemplateRef<unknown>) {}
}
