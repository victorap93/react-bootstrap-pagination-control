import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Pagination } from '../.';
import { Container, Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [page, setPage] = React.useState(1)

  return (
    <Container>
      <Row>
        <Col>
          <Pagination
            limit={30}
            page={page}
            total={250}
            changePage={(page) => {setPage(page); console.log(page)}}
          />
        </Col>
      </Row>
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
