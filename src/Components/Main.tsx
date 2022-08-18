import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Contacts from './Contacts';

function Main() {
  return (
    <Container className="container h-100 my-4">
      <Row className="h-100 bg-white flex-md-row">
        <Contacts />
      </Row>
    </Container>
  );
}

export default Main;
