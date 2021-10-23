import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { GridToolbarTemplateDirective } from './rendering/toolbar/grid-toolbar-template.directive';
import { GridToolbarComponent } from './rendering/toolbar/grid-toolbar/grid-toolbar.component';

@NgModule({
  declarations: [
    GridComponent,
    GridToolbarTemplateDirective,
    GridToolbarComponent,
  ],
  exports: [GridComponent, GridToolbarTemplateDirective],
  imports: [CommonModule],
})
export class GridModule {}
