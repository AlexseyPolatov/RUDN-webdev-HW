import { useState } from "react";
import styles from "./Card.module.css";
import { ICardProps } from "@/types/TCardProps";

export default function Card({ id, title, img, description, price }: ICardProps) {
  const [count, setCount] = useState(0);

  const increase = () => setCount(prev => prev + 1);
  const decrease = () => setCount(prev => (prev > 0 ? prev - 1 : 0));

  return (
    <div className={styles.card}>
      <img src={img} alt={title} className={styles.img} />

      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.wrapperTitle}>{title}</div>
          <div className={styles.description}>{description}</div>
        </div>

        <div className={styles.body}>
          <h3 className={styles.bodyTitle}>{price} ₽</h3>

          {count === 0 ? (
            <button 
              className={styles.button}
              onClick={increase}
            >
              <div className={styles.buttonText}>Заказать</div>
            </button>
          ) : (
            <div className={styles.counter}>
              
            <div className={styles.counterBlock}>
                <button className={styles.minus} onClick={decrease}>−</button>

              <div className={styles.count}>{count}</div>

              <button className={styles.plus} onClick={increase}>+</button>

            </div>
              <div className={styles.total}>
                {count * price} ₽
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}
