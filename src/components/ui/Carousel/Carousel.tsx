import { useState } from 'react';
import styles from './Carousel.module.css';
import CarouselItem from '@/components/features/CarouselItem/CarouselItem';
import Arrow from '@/components/ui/Arrow/Arrow';
import { ICarouselItem } from '@/types/TCarouselItem';

type CarouselProps = {
  items: ICarouselItem[];
  backgroundImage?: string;
  backgroundPosition?: string;
};

export default function Carousel({ items, backgroundImage, backgroundPosition }: CarouselProps) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? items.length - 1 : i - 1));

  const next = () => setIndex((i) => (i === items.length - 1 ? 0 : i + 1));

  return (
    <div className={styles.wrapper} style={{ backgroundImage, backgroundPosition }}>
      <div className={styles.title}>
        <h1>Почитайте отзывы довольных клиентов</h1>
      </div>
      <div className={styles.track}>
        {items.map((item, i) => {
          const position =
            i === index
              ? 'active'
              : i === (index - 1 + items.length) % items.length
              ? 'left'
              : i === (index + 1) % items.length
              ? 'right'
              : 'hidden';

          return <CarouselItem key={item.id} item={item} position={position} />;
        })}
      </div>
      <div className={styles.buttonBox}>
        <Arrow direction="left" onClick={prev} />
        <Arrow direction="right" onClick={next} />
      </div>
    </div>
  );
}
