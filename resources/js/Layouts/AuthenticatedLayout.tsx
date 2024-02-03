import React, { useState } from 'react';
import Footer from '@/Components/Admin/Footer';
import Header from '@/Components/Admin/Header';
import Sidebar from '@/Components/Admin/SideBar';
import { Head } from '@inertiajs/react';

export default function AuthenticatedLayout({ children }) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] =
    useState(false);
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
          <div className="md:w-64 bg-blue-cinco">
            <Sidebar />
          </div>
          <div className="flex flex-grow flex-col transition-all duration-150 ease-in md:ml-0 bg-gray-100">
            <Header />
            <div className="flex h-full items-start justify-start p-4">
              {children}
            </div>
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
}
