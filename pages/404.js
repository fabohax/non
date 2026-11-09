import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';

export default function NotFound() {
  return (
    <div className="container">
      <Head><title>Página no encontrada | NON20</title></Head>
      <Header />
      <main className="st">
        <h1>404 — Página no encontrada</h1>
        <p>La página que buscas no está disponible.</p>
        <Link href="/es">Volver a NON20</Link>
      </main>
      <Footer />
    </div>
  );
}
