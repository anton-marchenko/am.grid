import { Component, OnInit, ChangeDetectionStrategy, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { GridToolbarTemplateDirective } from '@shared-modules/grid/rendering/toolbar/grid-toolbar-template.directive';

@Component({
  selector: 'am-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent implements OnInit, AfterContentInit {
  @ContentChildren(GridToolbarTemplateDirective) amGridToolbarTemplate: QueryList<GridToolbarTemplateDirective> | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  private get toolbarTpl () {
      return this.amGridToolbarTemplate?.first;
  }

  get templateRef() {
    return this.toolbarTpl?.templateRef;
  }

  ngAfterContentInit() {
    if (this.amGridToolbarTemplate !== null) {
      this.amGridToolbarTemplate.forEach(itm => {
        // console.log(itm);
      })
    }
  }

}
