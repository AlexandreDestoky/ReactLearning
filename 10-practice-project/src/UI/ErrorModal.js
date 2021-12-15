import React from 'react';

import Card from './Card';
import Bouton from './Bouton';
import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Bouton>Okay</Bouton>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;