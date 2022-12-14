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
      <Row className='mt-3'>
        <Col>
          <PaginationControl
            page={page}
            total={250}
            limit={20}
            changePage={page => setPage(page)}
          />
        </Col>
      </Row>
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
