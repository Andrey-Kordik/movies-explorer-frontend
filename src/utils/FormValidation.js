import { useState, useCallback} from 'react';

 function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  
    const handleChange = (event) => {   
      const target = event.target;   
      const name = target.name;   
      const value = target.value;   
      setValues((prevValues) => ({ ...prevValues, [name]: value }));   
      
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
      (newValues = {}, newErrors = {}, newIsValid = false, errorMessage = '', successfulMessage = '') => {
        setValues(newValues);
        setErrors(newErrors);
        setIsValid(newIsValid);

      },
      [setValues, setErrors, setIsValid, ]
    );
  
    return { values, errors, isValid, handleChange, resetForm, setValues, setIsValid, setErrors};
  }

  export default useFormWithValidation;