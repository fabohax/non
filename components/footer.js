/*footer.js*/
import Link from 'next/link';
import LanguageDropdown from './language';
import { useRouter } from 'next/router';

const LOCALES = ['en', 'es', 'pt', 'tr', 'ru'];
const t = {
  en: { index: 'Home', shop: 'Shop', about: 'About', contact: 'Contact', faq: 'FAQ', privacy: 'Privacy Policy', terms: 'Terms of Service' },
  es: { index: 'Inicio', shop: 'Tienda', about: 'Info', contact: 'Contacto', faq: 'FAQs', privacy: 'Privacidad', terms: 'Términos' },
  pt: { index: 'Início', shop: 'Loja', about: 'Info', contact: 'Contato', faq: 'FAQ', privacy: 'Privacidade', terms: 'Termos' },
  tr: { index: 'Ana sayfa', shop: 'Mağaza', about: 'Hakkında', contact: 'İletişim', faq: 'SSS', privacy: 'Gizlilik', terms: 'Şartlar' },
  ru: { index: 'Главная', shop: 'Магазин', about: 'Инфо', contact: 'Контакт', faq: 'FAQ', privacy: 'Конфиденциальность', terms: 'Условия' },
};

const Footer = () => {
  const router = useRouter();
  const asPath = router?.asPath || '/';
  const firstSeg = asPath.split('?')[0].split('#')[0].split('/').filter(Boolean)[0];
  const locale = LOCALES.includes(firstSeg) ? firstSeg : 'en';
  const i = t[locale] || t.en;

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