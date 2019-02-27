import { State, Selector, Action, StateContext, Store } from '@ngxs/store';

const defaults = {
  orderForm: {
    model : { name : '', count: 1},
    dirty: false,
    status: "",
    errors: {}
  },
  orders: []
};
@State({
  name: "OrderState",
  defaults:defaults
})
export class OrderState{
static defaults = defaults;

constructor(private store: Store){

}


}
