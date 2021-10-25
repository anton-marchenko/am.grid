import { MockTpl } from '@shared/tests/mock-template-ref';
import { GridHeaderTemplateDirective } from './grid-header-template.directive';

describe('GridHeaderTemplateDirective', () => {
  it('should create an instance', () => {
    const directive = new GridHeaderTemplateDirective(new MockTpl());
    expect(directive).toBeTruthy();
  });
});
