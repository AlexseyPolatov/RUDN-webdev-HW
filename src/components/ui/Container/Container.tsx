import React from 'react';
import styles from './Container.module.css';

type Props = {
  left?: React.ReactNode;
  right?: React.ReactNode;
  center?: React.ReactNode;
  height?: number | string;
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundPosition?: string;
  backgroundSize?: string;
  bg2?: string;
  bp2?: string;
};

export default function Container({
  left,
  right,
  center,
  height,
  backgroundColor,
  backgroundImage,
  backgroundPosition,
  backgroundSize,

  bg2,
  bp2,
}: Props) {
  return (
    <div
      className={styles.container}
      style={{ height, backgroundColor, backgroundImage, backgroundPosition, backgroundSize }}>
      <div className={styles.half}>{left}</div>
      <div
        className={styles.half}
        style={{ backgroundImage: `${bg2}`, backgroundPosition: `${bp2}` }}>
        {right}
      </div>
      <div>{center}</div>
    </div>
  );
}
