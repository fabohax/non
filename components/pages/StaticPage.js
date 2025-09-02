// components/pages/StaticPage.js
import Head from 'next/head';
import Header from '../header';
import Footer from '../footer';

export default function StaticPage({ title, children, bare = false }) {
  if (bare) {
    return (
      <div className="st">
        <Head>
          <title>{title} | BITBOX</title>
        </Head>
        {children}
      </div>
    );
  }
  return (
    <div className="container">
      <Head>
        <title>{title} | BITBOX</title>
      </Head>
      <Header />
      <main className="st">
        {children}
      </main>
      <Footer />
    </div>
  );
}
