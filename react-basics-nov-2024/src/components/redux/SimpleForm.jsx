// components/SimpleForm.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateField, resetForm } from '../../reducers/formSlice';

const SimpleForm = () => {
  const form = useSelector((state) => state.form); // Select form state
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateField({ field: name, value })); // Update field in Redux store
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    dispatch(resetForm()); // Reset form after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SimpleForm;
