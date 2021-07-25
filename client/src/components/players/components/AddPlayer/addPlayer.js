import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import Field from '../../../layout/MaterialTextField';
import styles from './styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

function AddPlayer({
  classes,
  history,
  createPlayer,
  countries,
  getCountries,
}) {
  const [flag, setFlag] = useState('');

  useEffect(() => {
    getCountries();
  }, [getCountries]);

  if (!countries) {
    return <h1>WAIT!</h1>;
  }

  return (
    <Container>
      <Typography variant='h4'>New Player</Typography>
      <Paper>
        <Formik
          initialValues={{
            first_name: '',
            last_name: '',
            num: '',
            pos: '',
            country_id: '',
            birth: '',
            height: '',
            weight: '',
            pos_num: '',
            start_year: '',
            end_year: '',
          }}
          onSubmit={(values) => {
            createPlayer(values);
            history.push('/');
          }}
          validate={(values) => {
            const errors = {};
            if (!values.num) {
              errors.num = 'Number is require';
            } else if (values.num > 99) {
              errors.num = 'Number must be less than 100';
            }
            if (!values.pos) {
              errors.pos = 'Position is require';
            } else if (values.pos.length > 3) {
              errors.pos = 'Position must be shortly 3 symbols';
            }
            if (!values.first_name) {
              errors.first_name = 'First Name is require';
            }
            if (!values.last_name) {
              errors.last_name = 'Last Name is require';
            }
            return errors;
          }}
        >
          <Form>
            <div className={classes.num_pos}>
              <Field
                id='num'
                label='Number'
                variant='outlined'
                size='small'
                name='num'
              />
              <Field
                id='pos'
                label='Position'
                variant='outlined'
                size='small'
                name='pos'
              />
            </div>
            <div className={classes.names}>
              <Field
                id='first_name'
                label='First Name'
                variant='outlined'
                size='small'
                name='first_name'
              />
              <Field
                id='last_name'
                label='Last Name'
                variant='outlined'
                size='small'
                name='last_name'
              />
            </div>
            <div className={classes.names}>
              <Field
                id='country_id'
                select
                label='Country'
                variant='outlined'
                size='small'
                name='country_id'
              >
                {countries.map((country, id) => (
                  <MenuItem key={id} value={country.country_id}>
                    {country.name}
                  </MenuItem>
                ))}
                <img src={'/' + flag} alt='' />
              </Field>
            </div>
            <div className={classes.more_fields}>
              <Field
                id='birth'
                label='Birth Year'
                variant='outlined'
                size='small'
                name='birth'
              />
              <Field
                id='height'
                label='Height'
                variant='outlined'
                size='small'
                name='height'
              />
              <Field
                id='weight'
                label='Weight'
                variant='outlined'
                size='small'
                name='weight'
              />
              <Field
                id='pos_num'
                label='Position sort'
                variant='outlined'
                size='small'
                name='pos_num'
              />
            </div>
            <div className={classes.more_fields}>
              <Field
                id='start_year'
                label='Start Year'
                variant='outlined'
                size='small'
                name='start_year'
              />
              <Field
                id='end_year'
                label='End Year'
                variant='outlined'
                size='small'
                name='end_year'
              />
            </div>
            <div className={classes.buttons}>
              <Button
                type='submit'
                variant='contained'
                startIcon={<CheckCircleIcon />}
                className={classes.btnSubmit}
              >
                Submit
              </Button>
              <Button
                variant='contained'
                startIcon={<CancelIcon />}
                className={classes.btnCancel}
              >
                Cancel
              </Button>
            </div>
          </Form>
        </Formik>
      </Paper>
    </Container>
  );
}

export default styles(AddPlayer);
