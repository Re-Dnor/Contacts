import React from 'react';
import LoginForm from './LoginForm';

function Login() {
  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center align-content-center h-100">
        <div className="col-12 col-md-8 col-xxl-6">
          <div className="card shadow-sm">
            <div className="card-body row p-5">
              <LoginForm />
            </div>
            <div className="card-footer p-4">
              <div className="text-center">
                <span>Admin are you here?</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
