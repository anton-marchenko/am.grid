import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'am-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'am-grid';

  data = [
    { ID: 1, Name: 'Ant', Rating: 5 },
    { ID: 2, Name: 'Lex', Rating: 4 },
    { ID: 3, Name: 'Joe', Rating: 3 },
  ];

  constructor() {}

  ngOnInit() {}
}
