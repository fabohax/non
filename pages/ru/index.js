/*index.js*/
import React from 'react';
import HomePage from '../../components/HomePage';
import Header from '../../components/header';
import Footer from '../../components/footer';

export default function Home() {
  return (
    <div className="container">
      <Header/>
      <HomePage/>
      <Footer />
    </div>
  );
}
