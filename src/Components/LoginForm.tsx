import React, { useState, useEffect, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toLogIn } from '../store/auth-slice';

function LoginForm() {
  const dispatch = useDispatch();
  const [formControlFeedbach, setFormControlFeedbach] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: yup.object({
      username: yup.string().trim().required(),
      password: yup.string().required(),
    }),
    onSubmit: async (values) => {
      setFormControlFeedbach(false);
      try {
        const res = await axios.get('http://localhost:4000/users');
        const data = {
          allUsers: res.data,
          inputData: values,
        };

        dispatch(toLogIn(data));
        setFormControlFeedbach(true);
        navigate('/');
      } catch (error: unknown) {
        toast.error('Network error');
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit} className="col-12 mt-3 mt-mb-0">
      <h1 className="text-center mb-4">Welcome</h1>
      <Form.Group className="form-floating mb-3">
        <Form.Control
          onChange={formik.handleChange}
          value={formik.values.username}
          name="username"
          type="username"
          id="username"
          autoComplete="username"
          isInvalid={formControlFeedbach}
          required
          ref={inputRef}
          placeholder="Nickname"
        />
        <Form.Label htmlFor="username">Nickname</Form.Label>
      </Form.Group>
      <Form.Group className="form-floating mb-4">
        <Form.Control
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          name="password"
          id="password"
          autoComplete="current-password"
          isInvalid={formControlFeedbach}
          required
          placeholder="password"
        />
        <Form.Label htmlFor="password">Password</Form.Label>
        {formControlFeedbach && (
        <Form.Control.Feedback type="invalid" tooltip>
          Not Correctsss
        </Form.Control.Feedback>
        )}
      </Form.Group>
      <Button type="submit" variant="outline-primary" className="w-100 mb-3">
        Submit
      </Button>
    </Form>
  );
}

export default LoginForm;
