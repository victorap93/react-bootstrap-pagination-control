import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PaginationControl } from '../.';
import { Container, Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [page, setPage] = React.useState(1)

  return (
    <Container>
      <Row>
        <Col>
          <PaginationControl
            page={page}
            between={4}
            total={250}
            limit={20}
            changePage={(page) => {setPage(page); console.log(page)}}
            ellipsis={1}
          />
        </Col>
      </Row>
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
