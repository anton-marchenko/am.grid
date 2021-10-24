import { ElementRef, EmbeddedViewRef, TemplateRef } from '@angular/core';

export class MockTpl extends TemplateRef<unknown> {
  get elementRef(): ElementRef<unknown> {
    throw new Error('Method not implemented.');
  }
  createEmbeddedView(context: unknown): EmbeddedViewRef<unknown> {
    throw new Error('Method not implemented.');
  }

}
