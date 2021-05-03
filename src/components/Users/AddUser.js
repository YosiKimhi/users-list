import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    console.log(enteredUserName, enteredAge);
    setEnteredAge('');
    setEnteredUserName('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          type='text'
          onChange={usernameChangeHandler}
          value={enteredUserName}
        />
        <label htmlFor='age'>Age (Years)</label>
        <input
          id='age'
          type='number'
          onChange={ageChangeHandler}
          value={enteredAge}
        />
        <Button type='submit'>Add Users</Button>
      </form>
    </Card>
  );
};

export default AddUser;
