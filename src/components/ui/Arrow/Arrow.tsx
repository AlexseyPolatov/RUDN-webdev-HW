import styles from './Arrow.module.css';

interface Props {
  direction: 'left' | 'right';
  onClick: () => void;
}

export default function Arrow({ direction, onClick }: Props) {
  return (
    <button className={`${styles.arrow} ${styles[direction]}`} onClick={onClick}>
      {direction === 'left' ? '‹' : '›'}
    </button>
  );
}
