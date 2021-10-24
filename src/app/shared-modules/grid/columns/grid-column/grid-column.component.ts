import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}
}
