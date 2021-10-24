import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { GridToolbarTemplateDirective } from './rendering/toolbar/grid-toolbar-template.directive';
import { GridToolbarComponent } from './rendering/toolbar/grid-toolbar/grid-toolbar.component';
import { GridColumnComponent } from './columns/grid-column/grid-column.component';
import { GridCellTemplateDirective } from './rendering/cell/grid-cell-template.directive';

@NgModule({
  declarations: [
    GridComponent,
    GridToolbarTemplateDirective,
    GridToolbarComponent,
    GridColumnComponent,
    GridCellTemplateDirective,
  ],
  exports: [GridComponent, GridToolbarTemplateDirective, GridColumnComponent],
  imports: [CommonModule],
})
export class GridModule {}
