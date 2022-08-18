import React from 'react';
import { Button, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { toLogOut } from '../store/auth-slice';
import type { RootState } from '../store/store';
import 'react-toastify/dist/ReactToastify.css';

function Navbar() {
  const dispatch = useDispatch();
  const { authStatus } = useSelector((state: RootState) => state.auth);
  return (
    <BootstrapNavbar bg="white" expand="lg" className="shadow-sm">
      <div className="container">
        <BootstrapNavbar.Brand as={Link} to="/">Contacts</BootstrapNavbar.Brand>
        {authStatus && <Button onClick={() => dispatch(toLogOut())}>Выход</Button>}
      </div>
      <ToastContainer autoClose={1500} />
    </BootstrapNavbar>
  );
}

export default Navbar;
