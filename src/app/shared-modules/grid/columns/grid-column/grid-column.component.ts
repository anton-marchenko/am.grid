import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ContentChild,
} from '@angular/core';
import { GridCellTemplateDirective } from '@shared-modules/grid/rendering/cell/grid-cell-template.directive';
import { GridHeaderTemplateDirective } from '@shared-modules/grid/rendering/cell/grid-header-template.directive';

@Component({
  selector: 'am-grid-column',
  templateUrl: './grid-column.component.html',
  styleUrls: ['./grid-column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridColumnComponent implements OnInit {
  @Input() field: string | null = null;
  @Input() title: string | null = null;
  @Input() width: number | null = null;
  @Input() hidden: boolean = false;

  @ContentChild(GridCellTemplateDirective)
  cellTemplateChild: GridCellTemplateDirective | null = null;

  @ContentChild(GridHeaderTemplateDirective)
  headerTemplateChild: GridHeaderTemplateDirective | null = null;

  constructor() {}

  get templateRef() {
    return this.cellTemplateChild?.templateRef;
  }

  get headerTemplateRef() {
    return this.headerTemplateChild?.templateRef;
}

  ngOnInit(): void {}
}
