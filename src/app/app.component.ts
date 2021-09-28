import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'am-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'am-grid';

  constructor(
  ) {}

  ngOnInit() {}
}
