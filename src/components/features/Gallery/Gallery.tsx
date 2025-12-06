import { galleryImages } from "@/data/GalleryData";
import { useEffect, useState } from "react";
import styles from "./Gallery.module.css";

export default function Gallery() {
  const [visible, setVisible] = useState(galleryImages.slice(0, 9));
  const [fade, setFade] = useState(Array(9).fill(false));

  useEffect(() => {
    const interval = setInterval(() => {
      const indexToChange = Math.floor(Math.random() * 9);
      const newImageIndex = Math.floor(Math.random() * galleryImages.length);

      // включаем fade-out
      setFade((prev) => {
        const arr = [...prev];
        arr[indexToChange] = true;
        return arr;
      });

      // ждём 0.5s, затем меняем картинку и fade-in
      setTimeout(() => {
        setVisible((prev) => {
          const arr = [...prev];
          arr[indexToChange] = galleryImages[newImageIndex];
          return arr;
        });

        setFade((prev) => {
          const arr = [...prev];
          arr[indexToChange] = false;
          return arr;
        });
      }, 1500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h1>Сделали более 3.000 заказов за 2 года</h1>
        <div>Посмотрите фото реальных заказов из нашего instagram</div>
      </div>
      <div className={styles.gallery}>
        {visible.map((img, i) => (
          <div
            key={i}
            className={`${styles.item} ${
              fade[i] ? styles.fadeOut : styles.fadeIn
            }`}>
            <img src={img} alt={`gallery-${i}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
