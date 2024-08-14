import React, { useState } from 'react';
import FirstForm from './FormStep1';
import SecondForm from './FormStep3';
import ThirdForm from './FormThreejs';

const FormContainer = () => {
  const [currentForm, setCurrentForm] = useState('first');
  const [formData, setFormData] = useState({});

  const handleSaveFirstForm = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setCurrentForm('second');
  };

  const handleSaveSecondForm = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setCurrentForm('third');
  };

  const handleSaveThirdForm = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    alert('All forms submitted!');
  };

  const handleBackFromThirdForm = () => {
    setCurrentForm('second');
  };

  const handleBackFromSecondForm = () => {
    setCurrentForm('first');
  };

  return (
    <div>
      {currentForm === 'first' && <FirstForm onSave={handleSaveFirstForm} />}
      {currentForm === 'second' && <SecondForm onSubmit={handleSaveSecondForm} />}
      {currentForm === 'third' && <ThirdForm onSave={handleSaveThirdForm} onBack={handleBackFromThirdForm} />}
    </div>
  );
};

export default FormContainer;

