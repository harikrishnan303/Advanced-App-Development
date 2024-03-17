import React, { useState } from 'react';
import '../../assets/css/Register.css';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    // Validation for fullName
    if (!fullName) {
      newErrors.fullName = 'Please include your full name.';
    }

    // Validation for email
    if (!email) {
      newErrors.email = 'Please include your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !email.endsWith('gmail.com')) {
      newErrors.email = 'Please include @ in the email and make sure it ends with gmail.com.';
    }

    // Validation for password
    if (!password) {
      newErrors.password = 'Please include a password.';
    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,15}/.test(password)) {
      newErrors.password =
        'Password should include @ and be 8-15 characters long with at least one uppercase letter, one lowercase letter, one number, and one special character.';
    }

    // Validation for confirm password
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please include a confirm password.';
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    // Set errors or submit form
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log('Form submitted successfully:', { fullName, email, password });
      setFullName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setErrors({});
    }
  };

  return (
    <div className="register-form">
      <div className="user-icon">
        <AssignmentIndIcon style={{ fontSize: '48px' }} />
      </div>
      <h1>Create New Account</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name:</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={errors.fullName ? 'error' : ''}
          />
          {errors.fullName && <span className="error-pop-up">{errors.fullName}</span>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-pop-up">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={errors.password ? 'error' : ''}
          />
          {errors.password && <span className="error-pop-up">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={errors.confirmPassword ? 'error' : ''}
          />
          {errors.confirmPassword && <span className="error-pop-up">{errors.confirmPassword}</span>}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
