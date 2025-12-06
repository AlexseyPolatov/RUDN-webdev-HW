import React, { ReactNode } from 'react';
import Button from '@/components/ui/Button/Button';
import styles from './Block.module.css';

type Props = {
  label?: string;
  bigText?: string;
  midText?: string;
  smallText?: string;
  color?: string;
  // children?:ReactNode
};

export default function Block({ label, bigText, midText, smallText, color  }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <div className={styles.label}>{label}</div>
        <h1 className={styles.title} style={{ color }}>
          {bigText}
        </h1>
        <p className={styles.desc} style={{ color }}>
          {midText}
        </p>
        <div className={styles.footer}>
          {/* <Button ></Button> */}
          <Button />
          <span className={styles.small} style={{ color }}>
            {smallText}
          </span>
        </div>
      </div>
    </div>
  );
}
