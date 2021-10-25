import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { GridColumnComponent } from '@shared-modules/grid/columns/grid-column/grid-column.component';
import { DataItem } from '@shared-modules/grid/data/data-item.type';

@Component({
  selector: 'am-grid-cell',
  templateUrl: './grid-cell.component.html',
  styleUrls: ['./grid-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridCellComponent implements OnInit {
  @Input() column: GridColumnComponent | null = null;
  @Input() columnIndex: number | null = null;
  @Input() rowIndex: number | null = null;
  @Input() dataItem: DataItem | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
