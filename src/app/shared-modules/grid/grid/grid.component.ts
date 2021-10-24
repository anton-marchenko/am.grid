import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  AfterContentInit,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { GridToolbarTemplateDirective } from '@shared-modules/grid/rendering/toolbar/grid-toolbar-template.directive';

@Component({
  selector: 'am-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridComponent implements OnInit, AfterContentInit {
  @ContentChildren(GridToolbarTemplateDirective)
  toolbarTemplateChildren: QueryList<GridToolbarTemplateDirective> | null = null;

  constructor() {}

  ngOnInit(): void {}

  private get toolbarTemplate() {
    // Only one toolbar is allowed in current implementation
    return this.toolbarTemplateChildren?.first;
  }

  get templateRef() {
    return this.toolbarTemplate?.templateRef;
  }

  get showBottomToolbar() {
    console.log(this.toolbarTemplateChildren)
    return (
      this.toolbarTemplate &&
      ['bottom', 'both'].includes(this.toolbarTemplate.position)
    );
  }

  get showTopToolbar() {
    return (
      this.toolbarTemplate &&
      ['top', 'both'].includes(this.toolbarTemplate.position)
    );
  }

  ngAfterContentInit() {
    if (this.toolbarTemplateChildren !== null) {
      this.toolbarTemplateChildren.forEach((itm) => {
        // console.log(itm);
      });
    }
  }
}
