import {Dispatch} from 'react';

export type StoreType = {
  configure(dispatch: Dispatch<Action>): void;
  dispatch: Dispatch<Action>;
};

const store: StoreType = {
  configure(dispatch: Dispatch<Action>): void {
    if (Object.isFrozen(this)) return;

    this.dispatch = dispatch;
    Object.freeze(this);
  },
  dispatch() {},
};

export default store;
