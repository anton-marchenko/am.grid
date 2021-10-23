import { ElementRef, EmbeddedViewRef, TemplateRef } from '@angular/core';
import { GridToolbarTemplateDirective } from './grid-toolbar-template.directive';

class MockTpl extends TemplateRef<unknown> {
  get elementRef(): ElementRef<any> {
    throw new Error('Method not implemented.');
  }
  createEmbeddedView(context: unknown): EmbeddedViewRef<unknown> {
    throw new Error('Method not implemented.');
  }

}

describe('GridToolbarTemplateDirective', () => {
  it('should create an instance', () => {
    const directive = new GridToolbarTemplateDirective(new MockTpl());
    expect(directive).toBeTruthy();
  });
});
