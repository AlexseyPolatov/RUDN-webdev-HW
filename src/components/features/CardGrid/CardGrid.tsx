import Card from '@/components/ui/Card/Card';
import styles from './CardGrid.module.css';
import { cards } from '@/data/CardData';

type Props = {
  backgroundColor?: string;
};

export default function CardGrid({ backgroundColor }: Props) {
  return (
    <div className={styles.cardsSection} style={{ backgroundColor }}>
      <h2>Карточки</h2>
      <div className={styles.cardsBlock} id="cards">
        <div className={styles.cardsGrid}>
          {cards.map((c) => (
            <Card key={c.id} id={c.id} title={c.title} img={c.img} description={c.description} price={c.price}/>
          ))}
        </div>
      </div>
    </div>
  );
}
