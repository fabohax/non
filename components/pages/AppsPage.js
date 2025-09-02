import React from 'react';
import Head from 'next/head';
import GridPage from './GridPage';

export default function AppsPage({ beforeGrid = null, title = 'Catalog' }) {
  return <GridPage title={title} top={beforeGrid} />;
}
