import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ContentChild,
} from '@angular/core';
import { GridCellTemplateDirective } from '@shared-modules/grid/rendering/cell/grid-cell-template.directive';

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

  constructor() {}

  private get template() {
    return this.cellTemplateChild;
  }

  get templateRef() {
    return this.template?.templateRef;
  }

  ngOnInit(): void {}
}
