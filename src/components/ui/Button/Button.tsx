import React, { useContext } from 'react';
import styles from './Button.module.css';
import { ButtonContext } from '@/types/ButtonContext';


export default function Button() {
  const { text, children, onClick } = useContext(ButtonContext);

  return (
    <div className={styles.wrapper} onClick={onClick}>
      <div className={styles.button}>
        <div className={styles.buttonText}>{children ? children : text}</div>
      </div>
    </div>
  );
}
