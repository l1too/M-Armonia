import React, { useState } from 'react';

const PasswordToggleInput = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  const handleToggleVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="form-control text-formulario">
      <label>
        <input
          placeholder="Password"
          className="input-field"
          type={passwordVisible ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="button" onClick={handleToggleVisibility}>
        {passwordVisible ? 'Ocultar' : 'Mostrar'}
      </button>
    </div>
  );
};

export default PasswordToggleInput;
