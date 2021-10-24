import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  HostBinding,
} from '@angular/core';
import { GridComponent } from '@shared-modules/grid/grid/grid.component';
import { ToolbarPosition } from '@shared-modules/grid/rendering/toolbar/toolbar-position.type';

@Component({
  selector: 'am-grid-toolbar',
  templateUrl: './grid-toolbar.component.html',
  styleUrls: ['./grid-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridToolbarComponent implements OnInit {
  @Input() set position(position: ToolbarPosition) {
    this.context = {
      ...this.context,
      position,
    };

    this._position = position;
  }

  @HostBinding('class') get positionClass() {
    return this._position;
  }

  get toolbarTemplateRef() {
    return this.grid?.templateRef;
  }

  context: Readonly<{ position?: ToolbarPosition }> = {};

  private _position: ToolbarPosition = 'top';

  constructor(private readonly grid: GridComponent) {}

  ngOnInit(): void {}
}
