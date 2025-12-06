import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blockLeft}>
        <div className={styles.logo}>Сладкий сундук</div>
      </div>

      <div className={styles.blockRight}>
        <div className={styles.addressBlock}>
          <div className={styles.addressIcon}></div>
          <div className={styles.addressText}>
            г. Санкт Петербург, ул. Куйбышева 31
          </div>
        </div>

        <div className={styles.phoneBlock}>
          <div className={styles.phoneIcon}></div>
          <div className={styles.phoneInfo}>
            <div className={styles.phoneNumber}>8 (812) 844-95-49</div>
            <div className={styles.phoneTime}>Ежедневно с 9:00 до 20:00</div>
          </div>
        </div>
      </div>
      {/* <div className={styles.bottomLine}></div> */}
    </div>
  );
}
