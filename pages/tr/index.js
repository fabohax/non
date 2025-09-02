/*index.js*/
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import data from '../../db/data.json';
import Header from './header';
import Footer from './footer';
import HomePage from '../../components/HomePage';

export default function Home() {
  return <HomePage/>;
}
