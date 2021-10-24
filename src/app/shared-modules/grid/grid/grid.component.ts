import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  AfterContentInit,
  ContentChildren,
  QueryList,
  Input,
} from '@angular/core';
import { GridToolbarTemplateDirective } from '@shared-modules/grid/rendering/toolbar/grid-toolbar-template.directive';

type DataItem = { [key: string]: unknown };

@Component({
  selector: 'am-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridComponent implements OnInit, AfterContentInit {
  @Input() set data(data: ReadonlyArray<DataItem> | null) {
    this._data = data;

    this.colNames = data && data.length ? Object.keys(data[0]) : [];
  }

  get data() {
    return this._data;
  }

  @ContentChildren(GridToolbarTemplateDirective)
  toolbarTemplateChildren: QueryList<GridToolbarTemplateDirective> | null = null;

  colNames: ReadonlyArray<keyof DataItem> = [];

  private _data: ReadonlyArray<DataItem> | null = null;

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

  get noRecords() {
    return this.data === null || this.data.length === 0;
  }

  ngAfterContentInit() {
    if (this.toolbarTemplateChildren !== null) {
      this.toolbarTemplateChildren.forEach((itm) => {
        // console.log(itm);
      });
    }
  }
}
