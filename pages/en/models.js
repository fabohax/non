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
      title="MODELS | BITBIN"
      top={
        <div className="sections">
          <div className="section-button">
            <a href="/apps" className="rounded-button">
              Apps
            </a>
          </div>
          <div className="section-button">
            <a href="/courses" className="rounded-button">
              Courses
            </a>
          </div>
          <div className="section-button">
            <a href="/books" className="rounded-button">
              Books
            </a>
          </div>
          <div className="section-button">
            <a href="/models" className="rounded-button">
              Models
            </a>
          </div>
          <div className="section-button">
            <a href="/nft" className="rounded-button">
              NFT
            </a>
          </div>
        </div>
      }
    />
  );
}

// Removed models page for clothing store
export function Page() { return null; }
export async function getStaticProps(){ return { notFound: true }; }
