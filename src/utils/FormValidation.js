import { useState, useCallback } from 'react';

function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setValues({ ...values, [name]: value });;

    let emailError = target.validationMessage;
    if (name === 'email') {
      if (!value.includes('.')) {
        emailError = 'Email адрес должен содержать точку перед именем домена верхнего уровня';
      } else if (value.endsWith('.')) {
        emailError = 'Email адрес не должен заканчиваться на точку';
      }
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: target.validationMessage || emailError }));

    const isEmailError = name === 'email' && emailError;
    setIsValid((prevIsValid) => target.closest("form").checkValidity() && !isEmailError);
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm, setValues, setIsValid, setErrors };
}

export default useFormWithValidation;