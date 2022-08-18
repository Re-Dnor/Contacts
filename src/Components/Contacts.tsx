import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Col, ListGroup, CloseButton, FormGroup, FormControl, Button, Form, InputGroup,
} from 'react-bootstrap';
import _ from 'lodash';
import type { RootState } from '../store/store';
import { addContact, removeContact } from '../store/auth-slice';

function Search() {
  const dispatch = useDispatch();
  const [contact, setContact] = useState('');
  const [search, setSearch] = useState('');
  const { contacts } = useSelector((state: RootState) => state.auth);
  const filteredContact = contacts.filter((item) => {
    if (item.contact.toLowerCase().includes(search.toLocaleLowerCase())) {
      return true;
    }
    return false;
  });
  const inputForm = useRef<HTMLFormElement>(null);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (input.current) {
      input.current.focus();
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact(e.target.value);
  };

  const handleSeach = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newContact = {
      contactID: _.uniqueId('ContactID-'),
      contact,
    };

    dispatch(addContact(newContact));
    if (inputForm.current) {
      inputForm.current.reset();
    }
  };

  return (
    <Col>
      <Form.Control type="text" placeholder="Search" onChange={handleSeach} />
      <Form onSubmit={handleSubmit} ref={inputForm}>
        <FormGroup role="form">
          <InputGroup className="mb-3 mt-3">
            <FormControl type="text" placeholder="New contact" className="form-control" onChange={handleChange} ref={input} />
            <Button
              className="btn btn-primary btn-large centerButton"
              type="submit"
            >
              Send
            </Button>
          </InputGroup>
        </FormGroup>
      </Form>
      <div className="overflow-auto h-100">
        <ListGroup className="overflow-auto h-10" as="ol" numbered>
          {filteredContact.map((item) => (
            <ListGroup.Item
              key={_.uniqueId('Contact_')}
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                {item.contact}
              </div>
              <CloseButton onClick={() => dispatch(removeContact(item.contactID))} />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </Col>
  );
}

export default Search;
