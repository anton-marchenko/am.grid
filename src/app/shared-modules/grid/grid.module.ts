import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { GridToolbarTemplateDirective } from './rendering/toolbar/grid-toolbar-template.directive';
import { GridToolbarComponent } from './rendering/toolbar/grid-toolbar/grid-toolbar.component';
import { GridColumnComponent } from './columns/grid-column/grid-column.component';
import { GridCellTemplateDirective } from './rendering/cell/grid-cell-template.directive';
import { GridHeaderTemplateDirective } from './rendering/cell/grid-header-template.directive';
import { GridCellComponent } from './grid-cell/grid-cell.component';

@NgModule({
  declarations: [
    GridComponent,
    GridToolbarTemplateDirective,
    GridToolbarComponent,
    GridColumnComponent,
    GridCellTemplateDirective,
    GridHeaderTemplateDirective,
    GridCellComponent,
  ],
  exports: [
    GridComponent,
    GridToolbarTemplateDirective,
    GridCellTemplateDirective,
    GridHeaderTemplateDirective,
    GridColumnComponent,
  ],
  imports: [CommonModule],
})
export class GridModule {}
