// types/next.d.ts

import { NextPage } from 'next';

declare module 'next' {
  type NextPageWithLayout = NextPage & {
    getLayout?: (page: React.ReactNode) => React.ReactNode;
  };
}
