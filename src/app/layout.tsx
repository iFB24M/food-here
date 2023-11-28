import React, { Suspense } from 'react';

import type { Metadata } from 'next';
import './globals.scss';
import { Provider } from '@/components/Provider/Provider.component';
import { Header } from '@/components/Header/Header.component';
import { Popup } from '@/ui/Popup/Popup.component';
import { Footer } from '@/components/Footer/Footer.component';
import { Wordpress } from '@/services/Wordpress.service';
import { Spinner } from '@/ui/Spinner/Spinner.component';

export const generateMetadata = async (): Promise<Metadata> => {
  const { data: settings } = await Wordpress.getSettings();
  return {
    title: settings.name,
    description: settings.description
  };
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<Spinner />}>
          <Provider>
            <div className="wrapper">
              <Header></Header>
              <main className="main">

                {children}
                <Popup />
              </main>
              <Footer></Footer>
            </div>
          </Provider>
        </Suspense>
      </body>
    </html>
  );
}
