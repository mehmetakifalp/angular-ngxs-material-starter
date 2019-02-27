import { State, Selector, Action, StateContext, Store } from '@ngxs/store';
import { ORDER_FORM as defaults } from './defaults/order.form.defaults';
@State({
  name: 'OrderState',
  defaults: defaults,
})
export class OrderState {
  static NAME: string = 'OrderFormState';
  static DEFAULTS = defaults;

  constructor(private store: Store) {}
}
