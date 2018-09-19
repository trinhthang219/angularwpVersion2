import { CustomerBase } from '../customer-models/definition.base';

export class TextboxColumnOption extends CustomerBase<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}