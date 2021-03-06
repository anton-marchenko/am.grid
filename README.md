# am.Grid

Angular 12 customizable table.

It's a research how to develop this stuff.

# Code sample

Template:

```
  <am-grid [data]="data">
    <ng-template
      amGridToolbarTemplate
      let-dataItem
      [position]="'both'"
      let-position="position"
    >
      <button>Some Button</button>
      <span class="toolbar-msg">Toolbar with position: "{{ position }}"</span>
    </ng-template>

    <am-grid-column [field]="'ID'" [width]="100">
      <ng-template amGridHeaderTemplate let-column="column">
        <span class="red-color">{{ column.field }}</span>
      </ng-template>
      <ng-template
        amGridCellTemplate
        let-dataItem
        let-column="column"
        let-columnIndex="columnIndex"
        let-rowIndex="rowIndex"
      >
        {{ dataItem[column.field] }}
      </ng-template>
    </am-grid-column>

    <am-grid-column [field]="'Name'" [title]="'User name'">
      <ng-template amGridHeaderTemplate let-column="column">
        <span class="green-color">{{ column.title || column.field }}</span>
      </ng-template>
      <ng-template amGridCellTemplate let-dataItem let-column="column">
        <span class="green-color">{{ dataItem[column.field] }}</span>
      </ng-template>
    </am-grid-column>
  </am-grid>
```

Component:

```
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
```

# Demo sample

[Demo](https://anton-marchenko.github.io/am.grid/) for code above
