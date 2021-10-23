import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { GridComponent } from '@shared-modules/grid/grid/grid.component';

type Position = 'top' | 'bottom';

@Component({
  selector: 'am-grid-toolbar',
  templateUrl: './grid-toolbar.component.html',
  styleUrls: ['./grid-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridToolbarComponent implements OnInit {
  @Input() set position(position: Position) {
    this.context = {
      ...this.context,
      position,
    };
  }

  context: Readonly<{ position?: Position }> = {};

  get toolbarTemplateRef() {
    return this.grid?.templateRef;
  }

  constructor(private readonly grid: GridComponent) {}

  ngOnInit(): void {}
}
