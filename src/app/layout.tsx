import React, { Suspense } from 'react';

import type { Metadata } from 'next';
import './globals.scss';
import { Provider } from '@/components/Provider/Provider.component';
import { Header } from '@/components/Header/Header.component';
import { Popup } from '@/ui/Popup/Popup.component';
import { Footer } from '@/components/Footer/Footer.component';
import { Wordpress } from '@/services/Wordpress.service';
import { Spinner } from '@/ui/Spinner/Spinner.component';

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ display: 'swap', subsets: ['cyrillic'] });

export const generateMetadata = async (): Promise<Metadata> => {
  const { data: settings } = await Wordpress.getSettings();
  return {
    title: settings.name,
    description: settings.description
  };
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.className}>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body>
        <Suspense fallback={<Spinner />}>
          <Provider>
            <div className="wrapper">
              <Header />
              <main className="main">

                {children}
                <Popup />
              </main>
              <Footer />
            </div>
          </Provider>
        </Suspense>
      </body>
    </html>
  );
}
