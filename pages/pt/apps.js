import React from 'react';
import Head from 'next/head';
import Sections from './sections';
import AppsPage from '../../components/pages/AppsPage';

export default function Home() {
  return <AppsPage beforeGrid={<Sections/>} title="APPS | BITBIN"/>;
}

export function getStaticProps() {
  return {
    notFound: true,
  };
}
