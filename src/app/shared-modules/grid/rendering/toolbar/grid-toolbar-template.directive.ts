import { Directive, Input, TemplateRef } from '@angular/core';
import { ToolbarPosition } from '@shared-modules/grid/rendering/toolbar/toolbar-position.type';

type PositionSetting = ToolbarPosition | 'both';

@Directive({
  selector: '[amGridToolbarTemplate]',
})
export class GridToolbarTemplateDirective {
  @Input() position: PositionSetting = 'top';

  // OR TemplateRef<NgTemplateOutlet>
  constructor(public readonly templateRef: TemplateRef<unknown>) {}
}
