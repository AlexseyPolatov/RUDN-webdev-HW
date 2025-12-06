import { ICarouselItem } from '../../../types/TCarouselItem';
import styles from './CarouselItem.module.css';

interface Props {
  item: ICarouselItem;
  position: 'active' | 'left' | 'right' | 'hidden';
}

export default function CarouselItem({ item, position }: Props) {
  return (
    <div className={`${styles.card} ${styles[position]}`}>
      <div className={styles.wrapper}>
        <div className={styles.stick} style={{ backgroundColor: item.color || '#5D6AFB' }} />

        <div className={styles.title}>{item.title}</div>
        <div className={styles.text}>{item.text}</div>
      </div>

      <div className={styles.footer}>
        <img src={item.img} alt={item.name} className={styles.img} />

        <div className={styles.meta}>
          <div className={styles.name}>{item.name}</div>
          <div className={styles.city}>{item.city}</div>
        </div>
      </div>
    </div>
  );
}
