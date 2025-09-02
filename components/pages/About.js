// components/pages/About.js
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../header';
import Footer from '../footer';
import translations from '../../db/translations.json';

const LOCALES = ['en', 'es', 'pt', 'tr', 'ru'];

export default function About() {
  const router = useRouter();
  const asPath = router?.asPath || '/';
  const firstSeg = asPath.split('?')[0].split('#')[0].split('/').filter(Boolean)[0];
  const locale = LOCALES.includes(firstSeg) ? firstSeg : 'en';

  const t = translations?.[locale]?.about || translations.en.about;

  return (
    <div className="container">
      <Head>
        <title>{t.title} | BITBOX</title>
      </Head>
      <Header />
      <main className="st">
        <h2>{t.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: t.description }} />
      </main>
      <Footer />
    </div>
  );
}
