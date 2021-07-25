import React from 'react';
import { Field } from 'formik';
import TextField from '@material-ui/core/TextField';

function MaterialField({ field, form, ...props }) {
  const { touched, errors } = form;
  return (
    <TextField
      helperText={touched[field.name] && errors[field.name]}
      error={touched[field.name] && errors[field.name]}
      {...field}
      {...props}
    />
  );
}

function MaterialTextField({ ...props }) {
  return <Field {...props} component={MaterialField} />;
}

export default MaterialTextField;
