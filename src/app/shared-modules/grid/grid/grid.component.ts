import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  AfterContentInit,
  ContentChildren,
  QueryList,
  Input,
} from '@angular/core';
import { GridColumnComponent } from '@shared-modules/grid/columns/grid-column/grid-column.component';
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

    this.fields = data?.length ? Object.keys(data[0]) : [];
  }

  get data() {
    return this._data;
  }

  @ContentChildren(GridToolbarTemplateDirective)
  toolbarTemplateChildren: QueryList<GridToolbarTemplateDirective> | null = null;

  @ContentChildren(GridColumnComponent)
  columns: QueryList<GridColumnComponent> | null = null;

  private colComponents: { readonly [key: string]: GridColumnComponent } = {};

  fields: ReadonlyArray<string> = [];

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

  getColumnTitle(field: string) {
    return this.colComponents[field]?.title || field;
  }

  getColumnWidth(field: string) {
    return this.colComponents[field]?.width ?? null;
  }

  getColumnHidden(field: string) {
    return !!this.colComponents[field]?.hidden;
  }

  ngAfterContentInit() {
    this.colComponents =
      this.columns?.reduce((acc, curr) => {
        return curr.field
          ? {
              ...acc,
              [curr.field]: curr,
            }
          : { ...acc };
      }, {}) ?? [];

  }
}
