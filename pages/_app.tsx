// import 'tailwindcss/tailwind.css';
import '@/styles/globals.css'
// pages/_app.tsx

import { AppProps } from 'next/app';
import React from 'react';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const getLayout = (Component as any).getLayout || ((page: React.ReactNode) => page);

  return getLayout(<Component {...pageProps} />);
};

export default MyApp;
