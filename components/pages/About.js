// components/pages/About.js
import Head from 'next/head';
import Header from '../header';
import Footer from '../footer';
import translations from '../../db/translations.json';

export default function About() {
  const t = translations.es.about;

  return (
    <div className="container">
      <Head>
        <title>{t.title} | NON20</title>
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
