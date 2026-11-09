/*footer.js*/
import Link from 'next/link';
import LanguageDropdown from './language';
const t = {
  es: { index: 'Inicio', shop: 'Tienda', about: 'Nosotros', contact: 'Contacto', faq: 'Preguntas frecuentes', privacy: 'Privacidad', terms: 'Términos' },
};

const Footer = () => {
  const locale = 'es';
  const i = t.es;

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-item">
          <Link href={`/${locale}`}>{i.index}</Link>
        </div>
        <div className="footer-item">
          <Link href={`/${locale}`}>{i.shop}</Link>
        </div>
        <div className="footer-item">
          <Link href={`/${locale}/about`}>{i.about}</Link>
        </div>
        <div className="footer-item">
          <Link href={`/${locale}/contact`}>{i.contact}</Link>
        </div>
        <div className="footer-item">
          <Link href={`/${locale}/faq`}>{i.faq}</Link>
        </div>
        <div className="footer-item">
          <Link href={`/${locale}/privacy`}>{i.privacy}</Link>
        </div>
        <div className="footer-item">
          <Link href={`/${locale}/terms`}>{i.terms}</Link>
        </div>
        <div className="footer-item">
          <LanguageDropdown/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
