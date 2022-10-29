import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as PaginationControl } from '../stories/PaginationControl.stories';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PaginationControl
      total={250}
      limit={20}
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
