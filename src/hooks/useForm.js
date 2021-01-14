import { useState } from 'react';

export default function useForm(initialState = {}) {
  const [formState, setFormState] = useState(initialState);

  const reset = () => {
    setFormState( initialState )
  }

  const handleFormChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return [
    formState,
    handleFormChange,
    reset
  ];
}
