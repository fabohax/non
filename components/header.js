import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Currency from '../components/currency';
import { useRouter } from 'next/router';

const LOCALES = ['en', 'es', 'pt', 'tr', 'ru'];

const placeholders = {
  en: 'Search clothing',
  es: 'Buscar ropa',
  pt: 'Buscar roupas',
  tr: 'Giyim ara',
  ru: 'Поиск одежды',
};

const Header = () => {
  const router = useRouter();
  const asPath = router?.asPath || '/';
  const firstSeg = asPath.split('?')[0].split('#')[0].split('/').filter(Boolean)[0];
  const locale = LOCALES.includes(firstSeg) ? firstSeg : 'en';
  const placeholder = placeholders[locale] || placeholders.en;

  return (
    <header className="header">
      <Link href={`/${locale}`}>
        <Image src="/ico/bitbox.svg" className="logo" height={36} width={36} alt="logo"/>
      </Link>
      <div className="searchForm">
        <input
          type="text"
          placeholder={placeholder}
          className="searchInput"
        />
      </div>
      {/* Optionally show currency selector if needed */}
      {/* <Currency /> */}
      <Link href={`/${locale}/cart`}>
        <Image src="/ico/logo.svg" className="logo" height={36} width={36} alt="cart"/>
      </Link>
    </header>
  );
};

export default Header;
