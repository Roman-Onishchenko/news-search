import React from 'react';
import ReactDOM from 'react-dom';
import { createMockTask } from 'redux-saga/utils';
import saga from '../sagas';

describe('saga', () => {
  it('saga', () => {
    const generator = saga();
    let next = generator.next();

    const fetchNewsWatcher = createMockTask();

    next = generator.next(fetchNewsWatcher);
    expect(next.done).toBe(true);
  });
});
