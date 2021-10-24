import { MockTpl } from '@shared/tests/mock-template-ref';
import { GridToolbarTemplateDirective } from './grid-toolbar-template.directive';

describe('GridToolbarTemplateDirective', () => {
  it('should create an instance', () => {
    const directive = new GridToolbarTemplateDirective(new MockTpl());
    expect(directive).toBeTruthy();
  });
});
