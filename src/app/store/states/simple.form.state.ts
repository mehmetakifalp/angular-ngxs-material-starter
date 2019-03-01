import { State, Action, StateContext } from '@ngxs/store';
import { SaveActionForSimpleForm } from '../action/simple.form.action';

@State<Array<any>>({
  name: 'SimpleFormState',
  defaults: []
})
export class SimpleFormState {


  @Action(SaveActionForSimpleForm)
  SaveActionForSimpleForm(
    store: StateContext<Array<any>>,
    action: SaveActionForSimpleForm
  ) {
    const simpleFormData = store.getState();
    store.setState(simpleFormData.concat(action.payload));
  }
}
