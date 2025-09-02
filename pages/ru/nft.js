import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import data from '../../db/data.json';
import Header from './header';
import Footer from './footer';
import GridPage from '../../components/pages/GridPage';

export default function Home() {
  return (
    <GridPage
      title="NFT | BITBIN"
      top={
        <div className="sections">
          <div className="section-button">
            <Link href="/apps" className="rounded-button" passHref>
              Apps
            </Link>
          </div>
          <div className="section-button">
            <Link href="/courses" className="rounded-button" passHref>
              Courses
            </Link>
          </div>
          <div className="section-button">
            <Link href="/books" className="rounded-button" passHref>
              Books
            </Link>
          </div>
          <div className="section-button">
            <Link href="/models" className="rounded-button" passHref>
              Models
            </Link>
          </div>
        </div>
      }
    />
  );
}
