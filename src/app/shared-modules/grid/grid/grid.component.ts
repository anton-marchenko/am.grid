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
import { DataItem } from '@shared-modules/grid/data/data-item.type';
import { GridToolbarTemplateDirective } from '@shared-modules/grid/rendering/toolbar/grid-toolbar-template.directive';
import { trackByFn } from '@shared/utils/track-by.utils';

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

  readonly trackByFn = trackByFn;

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

  getColumn(field: string) {
    return this.colComponents[field];
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

  hasCellTemplate(field: string) {
    return this.colComponents[field]?.templateRef !== undefined;
  }

  getCellTemplate(field: string) {
    return this.colComponents[field]?.templateRef;
  }

  hasHeaderTemplate(field: string) {
    return this.colComponents[field]?.headerTemplateRef !== undefined;
  }

  getHeaderTemplate(field: string) {
    return this.colComponents[field]?.headerTemplateRef ?? null;
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
