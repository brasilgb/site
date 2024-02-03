import Footer from '@/Components/Site/Footer';
import Header from '@/Components/Site/Header';
import { Head } from '@inertiajs/react';
import React from 'react';

export default function GuestLayout({ children }) {
  return (
    <>
      <Head>
        <title>My app</title>
        <meta
          head-key="description"
          name="description"
          content="This is the default description"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <div className="min-h-screen bg-gray-100">
        <main className="flex min-h-screen flex-row bg-gray-middle">
          <div className="flex flex-grow flex-col transition-all duration-150 ease-in md:ml-0 bg-gray-100">
            <Header />
            <div className="flex flex-col h-full items-start justify-start">
              {children}
            </div>
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
}
