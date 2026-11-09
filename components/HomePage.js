import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import data from '../db/data.json';
import Header from './header';
import Footer from './footer';

const departments = [
  { title: 'ROPA', href: '#productos', image: '/02.avif', code: '01' },
  { title: 'ACCESORIOS', href: '#accesorios', image: '/12.avif', code: '02' },
  { title: 'SALUD SEXUAL', href: '#manifiesto', image: '/07.avif', code: '03' },
  { title: 'SETS MODULARES', href: '#configurator', image: '/10.avif', code: '04' },
];

export default function HomePage() {
  return (
    <div className="container non20-store">
      <Head>
        <title>NON20 — No encajas. Perteneces.</title>
        <meta name="description" content="Indumentaria modular y accesorios NON20. Dos universos: Santuario y Abismo." />
      </Head>
      <Header />
      <main>
        <section className="non20-hero" aria-labelledby="hero-title">
          <video className="hero-video" autoPlay muted loop playsInline poster="/02.avif" aria-hidden="true">
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          <div className="hero-shade" />
          <div className="hero-copy">
            <p className="eyebrow">CALLAO, PERÚ <span>—</span> THE 20% ANOMALY</p>
            <h1 id="hero-title" className="hero-wordmark">NON20</h1>
            <p className="hero-submark">THE 20% ANOMALY</p>
            <h2>NO ENCAJAS.<br />PERTENECES.</h2>
            <p className="hero-manifest">Ropa modular y accesorios para quienes convierten su diferencia en soberanía identitaria.</p>
            <a className="hero-cta" href="#productos">EXPLORA LA TIENDA <span>→</span></a>
          </div>
          <aside className="hero-universe">
            <span className="universe-symbol">✦</span>
            <strong>SANTUARIO<br />/ ABISMO</strong>
            <i />
            <span>INDUMENTARIA<br />MODULAR<br />ACCESORIOS<br />DE SALUD SEXUAL</span>
          </aside>
          <span className="hero-index">01 <i /> 03</span>
          <div className="hero-bottomline"><span>UNIFORMES PARA LA ANOMALÍA</span><span>SCROLL PARA EXPLORAR ↓</span></div>
        </section>

        <nav className="department-grid" aria-label="Explorar categorías">
          {departments.map((item) => (
            <a className="department-tile" href={item.href} key={item.title} id={item.title === 'ACCESORIOS' ? 'accesorios' : undefined}>
              <Image src={item.image} alt="" width={500} height={300} />
              <span className="department-code">{item.code} / NON20</span>
              <strong>{item.title}</strong><span className="department-arrow">→</span>
            </a>
          ))}
        </nav>

        <section className="collection" id="productos">
          <div className="collection-heading">
            <div><p className="eyebrow">01 — ARCHIVO DE PRENDAS</p><h2>PRODUCTOS DESTACADOS</h2></div>
            <Link href="/es#productos" className="view-all">VER TODOS <span>→</span></Link>
          </div>
          <div className="grid visible non20-grid">
            {data.data.slice(0, 5).map((product, index) => (
              <Link key={product.id} href={`/${product.id}`} className="product-item">
                <div className="product-image">
                  <Image width={600} height={600} src={product.image} alt={product.title} />
                  <span className="product-number">N° {String(index + 1).padStart(2, '0')}</span>
                  <span className="product-open">↗</span>
                  <span className="product-favorite" aria-hidden="true">♡</span>
                </div>
                <div className="product-caption"><span>{product.title}</span><span>{product.currency} {product.price.toFixed(2)}</span></div>
              </Link>
            ))}
          </div>
        </section>

        <section className="universe-band" id="colecciones">
          <div><p className="eyebrow">DOS FUERZAS / UNA IDENTIDAD</p><h2>SANTUARIO <span>↔</span> ABISMO</h2></div>
          <p>Protección y ruptura. Disciplina y deseo. Elige el universo que habla por ti.</p>
          <a href="#productos">EXPLORAR COLECCIONES <span>→</span></a>
        </section>

        <section className="manifest-band" id="manifiesto">
          <p className="eyebrow">[ MANIFIESTO // NON20 ]</p>
          <p>El 80% sigue patrones establecidos.<br />El otro 20% cuestiona, transforma y construye su propia identidad.</p>
          <span>UNIFORMES PARA LA ANOMALÍA.</span>
        </section>
        <section className="configurator-promo" id="configurator">
          <p className="eyebrow">NON20 / MODULAR SYSTEM</p>
          <h2>CONSTRUYE<br />TU PROPIA PIEZA.</h2>
          <p>Correas, herrajes y anclajes. Tu configuración, tus reglas.</p>
          <span className="coming-soon">CONFIGURADOR — PRÓXIMAMENTE</span>
        </section>
      </main>
      <Footer />
    </div>
  );
}
