# React Bootstrap Pagination Control

This component automatically controls the pagination display.

## Install

```bash
npm install react-bootstrap-pagination-control
```

## Options

![Options](https://github.com/victorap93/react-bootstrap-pagination-control/blob/main/attachments/Options.png?raw=true)

## Usage

This example show a complete component usage.

![PaginationControl](https://github.com/victorap93/react-bootstrap-pagination-control/blob/main/attachments/PaginationControl.gif?raw=true)

```typescript
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import { PaginationControl } from 'react-bootstrap-pagination-control';

export default () => {
  const [page, setPage] = useState(1)

  return <Pagination
    page={page}
    between={4}
    total={250}
    limit={20}
    changePage={(page) => {
      setPage(page); 
      console.log(page)
    }}
    ellipsis={1}
  />
}
```

## Props

| Name       | Type     | Default  | Description                                                                     |
| ---------- | -------- | -------- | ------------------------------------------------------------------------------- |
| page       | number   | 1        | Active page                                                                     |
| between    | number   | 3        | Max itens in left and right when `page` is in center, it's minimum value is *1* |
| total      | number   | -        | **Required**. Total of itens                                                    |
| limit      | number   | -        | **Required**. Max itens per page                                                |
| changePage | Function | () => {} | Function that will receive the page nunber when click                           |
| next       | boolean  | true     | Control if prev and next actions will be displayed                              |
| last       | boolean  | false    | Control if fist and last actions will be displayed                              |
| ellipsis   | number   | 0        | Number itens after ellipsis, its maximum value is equal (`between` - *2*)       |

## License
MIT