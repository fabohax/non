import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => (
  <header className="header">
    <Link href="/es" className="brand-mark" aria-label="NON20 inicio">
      <Image src="/non20.png" width={180} height={60} alt="NON20" priority />
    </Link>
    <nav className="header-actions" aria-label="Navegación principal">
      <Link href="/es#productos">Tienda</Link>
      <Link href="/es#colecciones">Colecciones</Link>
      <Link href="/es#accesorios">Accesorios</Link>
      <Link href="/es#manifiesto">Salud sexual</Link>
      <Link href="/es/about">Nosotros</Link>
    </nav>
    <div className="header-tools">
      <a href="/es#productos" aria-label="Buscar productos" className="header-search">⌕</a>
      <Link href="/es/about" aria-label="Cuenta" className="header-account">♙</Link>
      <Link href="/es/cart" aria-label="Carrito" className="header-cart">♧<span>↗</span></Link>
    </div>
  </header>
);

export default Header;
