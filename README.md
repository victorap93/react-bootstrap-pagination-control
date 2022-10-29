# React Bootstrap Pagination Control

This component automatically controls the pagination display.

## Install

```bash
npm install react-bootstrap-pagination-control
```

## Options

![Options](https://github.com/victorap93/react-bootstrap-pagination-control/blob/main/attachments/Options.png?raw=true)

## Usage

Component usage example.

![PaginationControl](https://github.com/victorap93/react-bootstrap-pagination-control/blob/main/attachments/PaginationControl.gif?raw=true)

```typescript
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import { PaginationControl } from 'react-bootstrap-pagination-control';

export default () => {
  const [page, setPage] = useState(1)

  return <PaginationControl
    page={page}
    between={4}
    total={250}
    limit={20}
    changePage={(page) => {
      setPage(page)
    }}
    ellipsis={1}
  />
}
```

You can see a interative component in [Storybook](https://main--634bec45cfdc1e46611e8ca6.chromatic.com).

## Props

### PaginationControl

| Name       | Type          | Default                   | Description                                                                   |
| ---------- | ------------- | ------------------------- | ----------------------------------------------------------------------------- |
| page       | number        | 1                         | Active page                                                                   |
| between    | number        | 3                         | Max itens in left and right when `page` is in center, it's minimum value is 1 |
| total      | number        | -                         | **Required**. Total of itens                                                  |
| limit      | number        | -                         | **Required**. Max itens per page                                              |
| changePage | number => any | page => console.log(page) | Function that will receive the page nunber when click                         |
| next       | boolean       | true                      | Control if prev and next actions will be displayed                            |
| last       | boolean       | false                     | Control if fist and last actions will be displayed                            |
| ellipsis   | number        | 0                         | Number itens after ellipsis, its maximum value is equal (`between` - 2)       |

## License
MIT