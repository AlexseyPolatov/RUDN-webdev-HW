import style from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={style.siteFooter} id="contact">
      <div className={style.containerInner}>
        <p>© {new Date().getFullYear()} MyOnePage — все права защищены</p>
      </div>
    </footer>
  );
}
