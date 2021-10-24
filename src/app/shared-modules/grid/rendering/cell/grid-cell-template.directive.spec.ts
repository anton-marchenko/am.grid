import { MockTpl } from '@shared/tests/mock-template-ref';
import { GridCellTemplateDirective } from './grid-cell-template.directive';

describe('GridCellTemplateDirective', () => {
  it('should create an instance', () => {
    const directive = new GridCellTemplateDirective(new MockTpl());
    expect(directive).toBeTruthy();
  });
});
