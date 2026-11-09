import React from 'react';
import Head from 'next/head';
import Sections from './sections';
// Removed apps page for clothing store
export default function Page() { return null; }
export async function getStaticProps(){ return { notFound: true }; }
