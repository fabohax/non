import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import data from '../../db/data.json';
import Header from './header';
import Sections from './sections';
import Footer from './footer';

export default function Page() {
  return null;
}

export async function getStaticProps() {
  return { notFound: true };
}
